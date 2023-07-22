import { Input, Button } from "antd";
import { useState } from "react";

export default function Search({ onSearch }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSearch = () => {
    if (latitude && longitude) {
      onSearch({
        lat: Number(latitude),
        long: Number(longitude),
      });
    }
  };

  return (
    <div>
      <Input
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
      />
      <Input
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
      />
      <Button type="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
