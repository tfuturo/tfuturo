import React from "react";

const AppointmentSchedule = ({ embedUrl, height = "600px", width = "100%" }) => {
  return (
    <div className="container my-5">
      {/* Introductory Text */}
      <div className="text-center mb-4">
        <h2 className="fw-bold text-primary">Reserva una cita con nosotros</h2>
        <p className="text-muted">
          Agenda una llamada con nuestro equipo para coaching y mentoría en Recursos Humanos. Estamos aquí para ayudarte a transformar tu organización y potenciar el desarrollo de tu equipo.
        </p>
      </div>

      {/* Embedded Scheduler */}
      <div
        className="appointment-schedule"
        style={{
          position: "relative",
          overflow: "hidden",
          width: width,
          height: height,
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          margin: "0 auto",
        }}
      >
        <iframe
          src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ16OOsPcr9gf4LbApln1HE48QxqtI-uvF61DTlFaA6Ry_6tQgKd9_v6wlHNGXqNV6nVzqnlIlbN?gv=true'
          title="Agendador de Citas"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="geolocation; microphone; camera"
        />
      </div>
    </div>
  );
};

export default AppointmentSchedule;








