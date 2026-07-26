import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { CustomerLayout } from "./layouts/CustomerLayout";
import { OwnerLayout } from "./layouts/OwnerLayout";
import { FullScreenLayout } from "./layouts/FullScreenLayout";
import { HomePage } from "./pages/shared/HomePage";
import { FavouritesPage } from "./pages/customer/FavouritesPage";
import { ProfilePage } from "./pages/customer/ProfilePage";
import { ManageMenuPage } from "./pages/owner/ManageMenuPage";
import { OwnerProfilePage } from "./pages/owner/OwnerProfilePage";
import { BusinessPage } from "./pages/shared/BusinessPage";
import { LoginPage } from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";

function App() {
  return (
    <AppLayout>
      <BrowserRouter>
        <Routes>
          <Route element={<CustomerLayout />}>
            <Route index element={<HomePage />} />
            <Route path="favorites" element={<FavouritesPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="owner" element={<OwnerLayout />}>
            <Route index element={<HomePage />} />
            <Route path="manage" element={<ManageMenuPage />} />
            <Route path="profile" element={<OwnerProfilePage />} />
          </Route>
          <Route element={<FullScreenLayout />}>
            <Route path="business/:id" element={<BusinessPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
