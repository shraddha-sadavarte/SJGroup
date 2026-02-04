import { useParams } from "react-router-dom";

import ConstructionLayout from "../servicesLayouts/ConstructionLayout";
import IndustrialLayout from "../servicesLayouts/IndustrialLayout";
import RealEstateLayout from "../servicesLayouts/RealEstateLayout";
//import HospitalityLayout from "../servicesLayouts/HospitalityLayout";

export default function ServiceDetail() {
  const { service } = useParams();

  switch (service) {
    case "construction":
      return <ConstructionLayout />;
    case "industrial-plant":
      return <IndustrialLayout />;
    case "real-estate":
      return <RealEstateLayout />;
    // case "hospitality":
    //   return <HospitalityLayout />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
          <h2 className="text-3xl">Service Not Found</h2>
        </div>
      );
  }
}
