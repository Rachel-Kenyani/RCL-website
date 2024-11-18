"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

import { IconSearch } from "@tabler/icons-react";
import React from "react";

const SearchBar = () => {
  const router = useRouter();

  const [open, setOpen] = useState(false); // To toggle the modal visibility
  const [query, setQuery] = useState(""); // To store the search query
  const [suggestions, setSuggestions] = useState<string[]>([]); // To store search suggestions

  const modalRef = useRef<HTMLDivElement | null>(null); // Ref for the modal container

  // Sample data (replace this with your actual data or API call)
  const items = [
    "Laptop for Hire",
    "Laptops for Sale",
    "Contact Us",
    "Blogs",
    "About Us",
    "FAQs",
  ];

  // Handle search input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions based on the query (simple example)
    if (value) {
      const filteredSuggestions = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (query) {
      router.push(`/list?name=${query}`);
      setOpen(false); // Close the modal after searching
    }
  };

  const handleIconClick = () => {
    // Trigger search when clicking the search icon
    if (query) {
      router.push(`/list?name=${query}`);
      setOpen(false); // Close the modal after searching
    }
  };

  // Handle the modal opening/closing
  const toggleModal = () => {
    setOpen(!open);
    setQuery(""); // Clear the query when the modal opens
    setSuggestions([]); // Clear the suggestions when opening
  };

  // Close the modal when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <form onSubmit={handleSearch}>
          <IconSearch
            className="text-tertiary cursor-pointer hover:text-primary"
            onClick={toggleModal}
          />
        </form>

        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div
              ref={modalRef} // Assign the ref to the modal container
              className="bg-white p-6 rounded-lg w-1/3 max-w-md"
            >
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  name="name"
                  value={query}
                  onChange={handleChange}
                  className="w-full p-2 pr-10 border border-gray-300 rounded"
                  placeholder="Search..."
                />
                <IconSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 poppins-medium cursor-pointer hover:text-secondary"
                  onClick={handleIconClick} // Trigger search when clicking the icon
                />
              </form>
              {suggestions.length > 0 && (
                <ul className="mt-4">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="p-2 cursor-pointer hover:text-white poppins-medium hover:bg-primary"
                      onClick={() => setQuery(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
