import * as L from 'leaflet';

declare module 'leaflet' {
  namespace AwesomeMarkers {
    interface AwesomeIconOptions extends L.IconOptions {
      icon?: string;
      prefix?: string;
      markerColor?: string;
    }

    function icon(options: AwesomeIconOptions): L.Icon;
  }

  namespace control {
    function markers(options?: any): L.Control;
  }
}
