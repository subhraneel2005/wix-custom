import StudentsSay from "@/components/CoursesSection/StudentsSay";
import EventsGrid from "@/components/EventsSection/EventPropCard";
import EventsMain from "@/components/EventsSection/EventsMain";
import WorkshopCard from "@/components/EventsSection/WorkshopCard";
import React from "react";

export default function Events() {
  return (
    <div>
      <EventsMain />
      <WorkshopCard />
      <EventsGrid />
      <StudentsSay />
    </div>
  );
}
