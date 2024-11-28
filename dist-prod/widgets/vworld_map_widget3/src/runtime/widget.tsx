import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Map as OLMap, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import XYZ from 'ol/source/XYZ';
import { fromLonLat, transform, transformExtent } from 'ol/proj';
import { Style, Stroke, Fill, Text } from 'ol/style';
import { Feature } from 'ol';
import Overlay from 'ol/Overlay'; 
import { MultiPolygon } from 'ol/geom';
import FullScreenControl from 'ol/control/FullScreen';

export default function VWorldMapWidget() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<OLMap | null>(null);
  const [selectedPNU, setSelectedPNU] = useState<string | null>(null);
  const [apiData, setApiData] = useState<any[]>([]);
  const [currentApi, setCurrentApi] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [layerVisible, setLayerVisible] = useState<boolean>(false); // 피처 레이어 ON/OFF 상태 관리
  const [newApiLayerVisible, setNewApiLayerVisible] = useState<boolean>(true); // New API Layer visibility state
  const popupRef = useRef<HTMLDivElement | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  const landUseLayer = useRef(
    new VectorLayer({
      source: new VectorSource(),
      visible: false, // 초기 visible 상태를 false로 설정
      style: (feature) =>
        new Style({
          stroke: new Stroke({
            color: 'blue',
            width: 2,
          }),
          fill: new Fill({
            color: 'rgba(0, 0, 255, 0.1)',
          }),
          text: new Text({
            text: feature.get('PNU') || '',
            font: '12px Calibri,sans-serif',
            fill: new Fill({ color: '#000' }),
            stroke: new Stroke({ color: '#fff', width: 3 }),
            offsetY: -15,
          }),
        }),
    })
  );

    // 새로운 레이어
    const newApiLayer = useRef(
      new VectorLayer({
        source: new VectorSource(),
        visible: true,
        style: new Style({
          stroke: new Stroke({
            color: 'red',
            width: 2,
          }),
          fill: new Fill({
            color: 'rgba(255, 0, 0, 0.3)',
          }),
        }),
      })
    );

    useEffect(() => {
      if (!mapRef.current || !popupRef.current) return;
  
      const popupOverlay = new Overlay({
        element: popupRef.current,
        positioning: 'bottom-center',
        offset: [0, -10],
      });
  
      const initMap = new OLMap({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://xdworld.vworld.kr/2d/Base/202002/{z}/{x}/{y}.png',
              maxZoom: 19,
            }),
          }),
          landUseLayer.current,
          newApiLayer.current,
        ],
        view: new View({
          center: fromLonLat([127.0, 37.5]),
          zoom: 14,
        }),
        controls: [],
        overlays: [popupOverlay],
      });

    // 전체화면 버튼 추가
    const fullScreenControl = new FullScreenControl();
    initMap.addControl(fullScreenControl);

    setMap(initMap);

    // 이벤트 리스너 정의
    const handleMoveEnd = () => {
      const extent = initMap.getView().calculateExtent(initMap.getSize());
      const bbox = transformExtent(extent, 'EPSG:3857', 'EPSG:4326').join(',');
      loadFeatures(bbox);

       // newApiLayer 데이터 로드 (BBOX는 그대로 EPSG:3857 사용)
  loadNewApiFeatures(extent);
    };

    const handleClick = (event) => {
      initMap.forEachFeatureAtPixel(event.pixel, (feature) => {
        const pnu = feature.get('PNU');
        if (pnu) {
          setSelectedPNU(pnu);
          setApiData([]);
          setCurrentApi(null);
          setCurrentPage(1);
        }
      });
    };

    const handleMapClick = (event) => {
      const features = [];
      initMap.forEachFeatureAtPixel(event.pixel, (feature) => {
        features.push(feature);
      });

      if (features.length > 0) {
        const feature = features[0];
        setSelectedFeature(feature);
        const coordinates = feature.getGeometry().getCoordinates();
        popupOverlay.setPosition(coordinates[0][0][0]);
      } else {
        setSelectedFeature(null);
        popupOverlay.setPosition(undefined);
      }
    };

    // 이벤트 등록
    initMap.on('moveend', handleMoveEnd);
    initMap.on('click', handleClick);
    initMap.on('click', handleMapClick);
    

    // 전체화면 변경 감지 후 맵 크기 업데이트
    const handleFullscreenChange = () => {
      setTimeout(() => {
        initMap.updateSize(); // 전체화면 크기 변경 반영
      }, 100); // DOM 안정화 후 호출
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      initMap.un('moveend', handleMoveEnd);
      initMap.un('click', handleClick);
      initMap.un('click', handleMapClick);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      initMap.setTarget(undefined);
    };
  }, [mapRef]);


   // 레이어 초기 visible 상태 동기화
   useEffect(() => {
    if (map) {
      landUseLayer.current.setVisible(layerVisible);
    }
  }, [map, layerVisible]);

  const loadFeatures = async (bbox: string) => {
    try {
      const features = await loadLayer(bbox.split(',').map(Number), 'dt_d154', 'getLandUseWFS');
      const source = landUseLayer.current.getSource();
      source.clear();
      source.addFeatures(features);
      map?.render();
    } catch (error) {
      console.error("Error loading layer:", error);
    }
  };
  
  const loadLayer = async (bbox: number[], typename: string, key: string, pnu: string = ''): Promise<Feature[]> => {
    // const url = new URL(`http://localhost:3002/vworld-api/ned/wfs/${key}`);
     const url = new URL(`https://221.143.73.254:36024/vworld-api/ned/wfs/${key}`);
    // const url = new URL(`https://api.vworld.kr/ned/wfs/${key}`);
    const reorderedBbox = [bbox[1], bbox[0], bbox[3], bbox[2]];
    url.searchParams.set('typename', typename);
    url.searchParams.set('bbox', `${reorderedBbox.join(',')},EPSG:4326`);
    if (pnu) {
      url.searchParams.set('pnu', pnu);
    }
    url.searchParams.set('resultType', 'results');
    url.searchParams.set('srsName', 'EPSG:4326');
    url.searchParams.set('output', 'application/json');
    url.searchParams.set('key', '11D97D6B-3B4D-3149-B3C9-24C4FA1AD76B');
    url.searchParams.set('domain', 'api.vworld.kr');

    try {
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
      return parseJsonFeatures(json);
    } catch (error) {
      console.error('Error fetching layer data:', error);
      return [];
    }
  };

  const filterByPnu = async (pnu: string) => {
    if (!map) return;
  
    const extent = map.getView().calculateExtent(map.getSize());
    const bbox = transformExtent(extent, 'EPSG:3857', 'EPSG:4326').map(Number);
  
    try {
      const features = await loadLayer(bbox, 'dt_d154', 'getLandUseWFS', pnu);
      const source = landUseLayer.current.getSource();
      source.clear();
      source.addFeatures(features);
      map.render();
    } catch (error) {
      console.error('Error filtering by PNU:', error);
    }
  };

  const parseJsonFeatures = (json: any): Feature[] => {
    return json.features.map((jsonFeature: any) => {
      const coordinates = jsonFeature.geometry.coordinates.map((polygon: any) =>
        polygon.map((ring: any) =>
          ring.map((coord: any) => transform(coord, 'EPSG:4326', 'EPSG:3857'))
        )
      );
      const polygon = new MultiPolygon(coordinates);
      const feature = new Feature({ geometry: polygon });
      feature.set('PNU', jsonFeature.properties.pnu);
      return feature;
    });
  };

  const loadNewApiFeatures = async (extent: number[]) => {
    try {
      // BBOX 좌표 그대로 사용
      const bbox = extent.join(',');
      // const url = new URL('http://localhost:3002/vworld-api/req/data');
      const url = new URL('https://221.143.73.254:36024/vworld-api/req/data');
      // const url = new URL(' https://api.vworld.kr/req/data');
      url.searchParams.set('service', 'data');
      url.searchParams.set('version', '2.0');
      url.searchParams.set('request', 'GetFeature');
      url.searchParams.set('format', 'json');
      url.searchParams.set('data', 'LT_C_UPISUQ171');
      url.searchParams.set('geomfilter', `BOX(${bbox})`);
      url.searchParams.set(
        'columns',
        'present_sn,lclas_cl,mlsfc_cl,sclas_cl,atrb_se,wtnnc_sn,ntfc_sn,dgm_nm,dgm_ar,dgm_lt,signgu_se,sig_nam,lcl_nam,mls_nam,scl_nam,atr_nam,pmi_nam,exc_nam'
      );
      url.searchParams.set('geometry', 'true');
      url.searchParams.set('attribute', 'true');
      url.searchParams.set('crs', 'EPSG:3857');
      url.searchParams.set('key', '11D97D6B-3B4D-3149-B3C9-24C4FA1AD76B');
  
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const json = await response.json();
  
      // Check if response structure is valid
      const features = json?.response?.result?.featureCollection?.features || [];
      if (features.length === 0) {
        console.warn('No features found in the API response');
        return;
      }
  
      const olFeatures = features.map((feature: any) => {
        const geometry = new MultiPolygon(
          feature.geometry.coordinates.map((coords: any) =>
            coords.map((ring: any) => ring.map((coord: any) => coord))
          )
        );
        const olFeature = new Feature({ geometry });
        olFeature.setProperties(feature.properties);
        return olFeature;
      });
  
      const source = newApiLayer.current.getSource();
      source.clear();
      source.addFeatures(olFeatures);
    } catch (error) {
      console.error('Error loading new API features:', error);
    }
  };
  

  const fetchApiData = async (type: string) => {
    if (!selectedPNU) return;
    setCurrentApi(type);
    // const baseURL = 'http://localhost:3002/vworld-api/ned/data/';
    const baseURL = 'https://221.143.73.254:36024/vworld-api/ned/data/';
    // const baseURL = 'https://api.vworld.kr/ned/data/';
    let url = '';

    if (type === 'possess') {
      url = `${baseURL}getPossessionAttr?pnu=${selectedPNU}&format=json&pageNo=${currentPage}&key=11D97D6B-3B4D-3149-B3C9-24C4FA1AD76B`;
    } else if (type === 'landUse') {
      url = `${baseURL}getLandUseAttr?pnu=${selectedPNU}&format=json&pageNo=${currentPage}&key=11D97D6B-3B4D-3149-B3C9-24C4FA1AD76B`;
    } else if (type === 'indivPrice') {
      url = `${baseURL}getIndvdLandPriceAttr?pnu=${selectedPNU}&format=json&pageNo=${currentPage}&key=11D97D6B-3B4D-3149-B3C9-24C4FA1AD76B`;
    } else if (type === 'referPrice') {
      const idCode = selectedPNU.slice(0, 10);
      url = `${baseURL}getReferLandPriceAttr?ldCode=${idCode}&format=json&pageNo=${currentPage}&key=11D97D6B-3B4D-3149-B3C9-24C4FA1AD76B`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log("Full API Response:", data);

      // 필요한 데이터 추출
      let resultData;
      if (data?.possessions?.field) {
        resultData = data.possessions.field;
      } else if (data?.landUses?.field) {
        resultData = data.landUses.field;
      } else if (data?.indvdLandPrices?.field) {
        resultData = data.indvdLandPrices.field;
      } else if (data?.referLandPrices?.field) {
        resultData = data.referLandPrices.field;
      } else {
        resultData = [];
      }

      console.log("Parsed Result Data:", resultData);  // 파싱된 결과 확인
      setApiData(resultData);
    } catch (error) {
      console.error("Error fetching API data:", error);
      setApiData([]);
    }
  };

  const renderData = () => {
    const data = apiData[currentPage - 1] || {};
    return (
      <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid black' }}>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{key}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{String(value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const toggleLayerVisibility = () => {
    setLayerVisible((prev) => {
      const newVisibility = !prev;
      landUseLayer.current.setVisible(newVisibility);
      return newVisibility;
    });
  };

  const toggleNewApiLayerVisibility = () => {
    setNewApiLayerVisible((prev) => {
      const newVisibility = !prev;
      newApiLayer.current.setVisible(newVisibility);
  
      // 레이어를 활성화할 때 데이터 로드
      if (newVisibility) {
        const extent = map?.getView().calculateExtent(map.getSize());
        if (extent) {
          loadNewApiFeatures(extent);
        }
      }
      return newVisibility;
    });
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div id="map" ref={mapRef} style={{ width: '100%', height: '600px' }} />
      <div
        ref={popupRef}
        style={{
          position: 'absolute',
          backgroundColor: 'white',
          padding: '10px',
          borderRadius: '4px',
          border: '1px solid black',
          pointerEvents: 'none',
          zIndex: 1000,
        }}
      >
        {selectedFeature && (
          <div>
            <strong>Feature Attributes:</strong>
            <ul>
              {Object.entries(selectedFeature.getProperties()).map(([key, value]) =>
                key !== 'geometry' ? (
                  <li key={key}>
                    <strong>{key}:</strong> {String(value)}
                  </li>
                ) : null
              )}
            </ul>
          </div>
        )}
      </div>
      {selectedPNU && (
        <div style={{ position: 'absolute', top: '50px', left: '10px', background: 'white', padding: '10px' }}>
          <button onClick={() => {setSelectedPNU(null); fetchApiData(null);}} style={{ float: 'right', marginBottom: '10px' }}>
            닫기
          </button>
          <button onClick={() => fetchApiData('possess')}>토지소유정보속성조회</button>
          <button onClick={() => fetchApiData('landUse')}>토지이용계획속성조회</button>
          <button onClick={() => fetchApiData('indivPrice')}>개별공시지가속성조회</button>
          <button onClick={() => fetchApiData('referPrice')}>표준지공시지가속성조회</button>
        </div>
      )}
      {apiData.length > 0 && (
        <div style={{
          position: 'absolute', top: '100px', left: '10px', background: 'white', padding: '10px', maxHeight: '400px', overflowY: 'auto'
        }}>
          {renderData()}
          <div style={{ marginTop: '10px' }}>
          <button onClick={() => fetchApiData(null)} style={{ float: 'right', marginBottom: '10px' }}>
            닫기
          </button>
            <button onClick={() => setCurrentPage((page) => Math.max(page - 1, 1))}>이전 페이지</button>
            <button onClick={() => setCurrentPage((page) => Math.min(page + 1, apiData.length))}>다음 페이지</button>
          </div>
        </div>
      )}
      <button
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'white',
          padding: '10px',
          zIndex: 1000,
        }}
        onClick={toggleLayerVisibility}
      >
        필지 {layerVisible ? '끄기' : '켜기'}
      </button>
      <button
        style={{
          position: 'absolute',
          top: '10px',
          left: '100px',
          background: 'white',
          padding: '10px',
          zIndex: 1000,
        }}
        onClick={toggleNewApiLayerVisibility}
      >
        개발행위제한구역{newApiLayerVisible ? '끄기' : '켜기'}
      </button>
      <label>
    PNU 검색:
    <input
      type="text"
      onChange={(e) => setSelectedPNU(e.target.value)}
      value={selectedPNU || ''}
      style={{ marginLeft: '10px' }}
    />
  </label>
  <button
    onClick={() => {
      if (selectedPNU) {
        filterByPnu(selectedPNU);
      }
    }}
    style={{
      marginLeft: '10px',
      padding: '5px 10px',
      backgroundColor: 'blue',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    검색
  </button>
    </div>
  );
}
