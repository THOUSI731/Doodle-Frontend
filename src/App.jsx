import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import InstituteRegister from "./Pages/Authentication/InstituteRegister";
import RegisterInterface from "./Pages/Authentication/RegisterInterface";
import LoginInterface from "./Pages/Authentication/LoginInterface";
import InstituteLogin from "./Pages/Authentication/InstituteLogin";
import OTPAuthentication from "./Pages/Authentication/OTPAuthentication";
import InsHomePage from "./Pages/Institute/InsHomePage";
// import PrivateRoutes from "./routers/PrivateRoutes";
import InsDashboard from "./Pages/Institute/InsDashboard";
import InsInbox from "./Pages/Institute/InsInbox";
import InsProfile from "./Pages/Institute/InsProfile";
import InsAccount from "./Pages/Institute/InsAccount";
import InsStudentsListCreate from "./Pages/Institute/InsStudentsListCreate";
import InsBatchesListCreate from "./Pages/Institute/InsBatchesListCreate";
import InsBatchesDetail from "./Pages/Institute/InsBatchesDetail";
import InsStudentDetailView from "./Pages/Institute/InsStudentDetailView";
import InsTaskManagement from "./Pages/Institute/TaskManagement/InsTaskManagement";
import InsTaskDetailView from "./Pages/Institute/TaskManagement/InsTaskDetailView";
import InsClassroomManagement from "./Pages/Institute/ClassroomManagement/InsClassroomManagement";
import InsClassroomDetailView from "./Pages/Institute/ClassroomManagement/InsClassroomDetailView";
import InsChatroom from "./Pages/Institute/ChatManagement/InsChatroom";
import StuDashboard from "./Pages/Student/StuDashboard";
import StuProfile from "./Pages/Student/StuProfile";
import StudentLogin from "./Pages/Student/StudentLogin";
import InstituteRoutes from "./routers/InstituteRoutes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InsPayments from "./Pages/Institute/InsPayments";
import PageNotFound from "./Pages/Authentication/PageNotFound";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";
import StuClassmates from "./Pages/Student/StuClassmates";
import StuTasks from "./Pages/Student/StuTasks";
import StuPayments from "./Pages/Student/StuPayments";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        {/* Authentication Action  */}
        <Route element={<RegisterInterface />} path="/register" />
        <Route element={<LoginInterface />} path="/login" />
        <Route element={<InstituteRegister />} path="/institute/register" />
        <Route element={<InstituteLogin />} path="/institute/login" />
        <Route
          element={<OTPAuthentication />}
          path="/verifyotp/:user_id/:phone_number"
        />
        <Route element={<PageNotFound/>} path="*"/>
        <Route element={<ForgetPassword/>} path="/forget"/>
        {/* Institute Actions */}
        <Route
          element={
            <InstituteRoutes>
              <InsHomePage />
            </InstituteRoutes>
          }
          path="/institute/home"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsDashboard />
            </InstituteRoutes>
          }
          path="/institute/dashboard"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsInbox />
            </InstituteRoutes>
          }
          path="/institute/inbox"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsProfile />
            </InstituteRoutes>
          }
          path="/institute/profile"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsBatchesListCreate />
            </InstituteRoutes>
          }
          path="/institute/batches"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsBatchesDetail />
            </InstituteRoutes>
          }
          path="/institute/batch/:id"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsStudentsListCreate />
            </InstituteRoutes>
          }
          path="/institute/students"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsStudentDetailView />
            </InstituteRoutes>
          }
          path="/institute/student/:id"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsAccount />
            </InstituteRoutes>
          }
          path="/institute/account"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsTaskManagement />
            </InstituteRoutes>
          }
          path="/institute/task"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsTaskDetailView />
            </InstituteRoutes>
          }
          path="/institute/task/detail/:id"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsClassroomManagement />
            </InstituteRoutes>
          }
          path="/institute/classroom"
        />
        <Route
          element={<InsClassroomDetailView />}
          path="/institute/classroom/detail"
        />
        <Route
          element={
            <InstituteRoutes>
              <InsChatroom />
            </InstituteRoutes>
          }
          path="/institute/chatroom"
        />
        <Route element={<InsPayments />} path="/institute/payments" />

        {/* Student Action */}
        <Route element={<StuDashboard />} path="/student/dashboard" />
        <Route element={<StudentLogin />} path="/student/login" />
        <Route element={<StuProfile />} path="/student/profile" />
        <Route element={<StuClassmates />} path="/student/classmates" />
        <Route element={<StuTasks />} path="/student/tasks" />
        <Route element={<StuPayments/>} path="/student/payments"/>
      </Routes>
    </LocalizationProvider>
  );
}

export default App;
