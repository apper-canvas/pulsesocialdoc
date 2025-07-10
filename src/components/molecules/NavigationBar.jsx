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
    <>
      {/* Desktop Sidebar Navigation */}
      <motion.nav
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className={cn(
          "hidden lg:block w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 h-full",
          className
        )}
        {...props}
      >
        <div className="p-6">
          <div className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium",
                    isActive 
                      ? "bg-primary text-white shadow-lg" 
                      : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <ApperIcon
                      name={item.icon}
                      size={20}
                      className={cn(
                        "transition-colors duration-200",
                        isActive ? "text-white" : "text-gray-500"
                      )}
                    />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className={cn(
          "lg:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 z-40",
          className
        )}
        {...props}
      >
        <div className="max-w-md mx-auto px-2 sm:px-4 py-2">
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
                        "p-2 sm:p-3 rounded-xl transition-all duration-200",
                        isActive ? "bg-primary/10" : "hover:bg-gray-100"
                      )}
                    >
                      <ApperIcon
                        name={item.icon}
                        size={20}
                        className={cn(
                          "transition-colors duration-200",
                          isActive ? "text-primary" : "text-gray-500"
                        )}
                      />
                    </motion.div>
                    <span className="text-xs font-medium mt-1 block truncate">
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default NavigationBar;