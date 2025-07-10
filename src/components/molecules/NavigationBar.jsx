import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const NavigationBar = ({ className, ...props }) => {
  const navItems = [
    { to: "/", icon: "Home", label: "Home" },
    { to: "/search", icon: "Search", label: "Search" },
    { to: "/create", icon: "Plus", label: "Create" },
    { to: "/profile", icon: "User", label: "Profile" },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 z-40",
        className
      )}
      {...props}
    >
      <div className="max-w-md mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "nav-item flex-1 max-w-[80px]",
                  isActive ? "active text-primary" : "text-gray-500"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "p-2 rounded-xl transition-all duration-200",
                      isActive ? "bg-primary/10" : "hover:bg-gray-100"
                    )}
                  >
                    <ApperIcon
                      name={item.icon}
                      size={24}
                      className={cn(
                        "transition-colors duration-200",
                        isActive ? "text-primary" : "text-gray-500"
                      )}
                    />
                  </motion.div>
                  <span className="text-xs font-medium mt-1 block">
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default NavigationBar;