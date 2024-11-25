"use client";
import React, { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
export const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");

      const { Marker } = await loader.importLibrary("marker") as google.maps.MarkerLibrary;

      const position = { lat: -1.2819862365722656, lng: 36.821109771728516 };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
        mapId: "MY_NEXTJS_MAP_ID",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map:map,
        position:position,
      })
    };
    initMap();
  });
  return <div style={{ height: "100vh" }} ref={mapRef} />;
};
