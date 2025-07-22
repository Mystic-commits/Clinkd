import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, Edit3, LogOut } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useState } from "react";

const ProfileDropdown = () => {
  const { user, isLoggedIn, logout } = useUser();
  const [isEditOpen, setIsEditOpen] = useState(false);

  if (!isLoggedIn || !user) {
    return (
      <Button
        variant="outline"
        className="border-primary-purple text-primary-purple bg-transparent hover:bg-primary-purple/10 hover:text-primary-purple rounded-full"
        asChild
      >
        <Link to="/login">Login</Link>
      </Button>
    );
  }

  const isUrl = user.profilePhoto.startsWith("http");

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-10 w-10 rounded-full"
          >
            {isUrl ? (
              <img
                src={user.profilePhoto}
                alt="Profile"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <span className="text-2xl">{user.profilePhoto}</span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 mr-4 bg-card-dark text-white border-muted-dark" align="end">
          <div className="p-4 space-y-2">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                {isUrl ? (
                  <img
                    src={user.profilePhoto}
                    alt="Profile"
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-3xl">{user.profilePhoto}</span>
                )}
              </div>
              <div>
                <p className="font-medium text-white">{user.name}</p>
                <p className="text-sm text-neutral-400">{user.email}</p>
              </div>
            </div>
            {user.bio && (
              <p className="text-sm text-neutral-400">{user.bio}</p>
            )}
          </div>
          <DropdownMenuSeparator className="bg-muted-dark" />
          <DropdownMenuItem asChild>
            <Link to="/wishlist" className="flex items-center">
              <Heart className="mr-2 h-4 w-4" />
              My Wishlist
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsEditOpen(true)}>
            <Edit3 className="mr-2 h-4 w-4" />
            Edit Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-muted-dark" />
          <DropdownMenuItem onClick={logout} className="text-red-500">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Profile edit modal can be implemented here in the future */}
    </>
  );
};

export default ProfileDropdown;