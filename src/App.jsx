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
      <div className="max-w-7xl mx-auto lg:flex lg:gap-8">
        {/* Desktop Sidebar Navigation */}
        <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
          <div className="fixed lg:sticky lg:top-0 h-screen lg:h-auto">
            <NavigationBar />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 lg:max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create" element={<Create />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden">
        <NavigationBar />
      </div>
      
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