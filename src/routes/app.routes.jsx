import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { CreateMovie } from "../pages/CreateMovie";
import { MoviePreview } from "../pages/MoviePreview";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CreateMovie />} />
      <Route path="/preview/:movieNote_id" element={<MoviePreview />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
  );
};