import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";
import NavigationBar from "@/components/molecules/NavigationBar";
import Home from "@/components/pages/Home";
import Search from "@/components/pages/Search";
import Create from "@/components/pages/Create";
import Profile from "@/components/pages/Profile";

function App() {
return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      
      <NavigationBar />
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </motion.div>
  );
}

export default App;