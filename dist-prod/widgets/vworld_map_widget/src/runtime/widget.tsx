import { React, AllWidgetProps, IMState } from 'jimu-core';

export default function VWorldMapWidget(props: AllWidgetProps<IMState>) {
  return (
    <iframe
      src={`${props.context.folderUrl}sample.html`} // folderUrl 기반으로 경로 설정
      style={{ width: '100%', height: '100%', border: 'none' }}
      title="VWorld Map"
    />
  );
  const resolvedFolderUrl = new URL(props.context.folderUrl, window.location.href).href;
console.log(resolvedFolderUrl);

}

