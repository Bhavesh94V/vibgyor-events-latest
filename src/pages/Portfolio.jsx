import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ArrowLeft,
  Calendar,
  Camera,
  Download,
  Grid,
  Heart,
  Image as ImageIcon,
  Link,
  List,
  MapPin,
  Plus,
  Search,
  Share2,
  Upload,
  Users,
  X
} from "react-feather";

export default function Gallery() {
  const [events, setEvents] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [showImageUploader, setShowImageUploader] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5100/api/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error("Failed to fetch events:", err));
  }, []);

  const categories = ["All", "Wedding", "Corporate",  "Concerts" , "Exhibitions" , "Galas"];
  const categoryCounts = {
    All: events.length,
    Wedding: events.filter(e => e.category === "Wedding").length,
    Corporate: events.filter(e => e.category === "Corporate").length,
    Concerts: events.filter(e => e.category === "Concerts").length,
    Exhibitions: events.filter(e => e.category === "Exhibitions").length,
    Galas: events.filter(e => e.category === "Galas").length,
  };

  const filteredCollections = events.filter(collection => {
    const matchesCategory = activeCategory === "All" || collection.category === activeCategory;
    const matchesSearch = collection.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         collection.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
  };

  const handleBackToGallery = () => {
    setSelectedCollection(null);
    setSelectedImage(null);
  };

  const ImageUploader = () => {
    const [activeTab, setActiveTab] = useState("upload");
    const [isDragOver, setIsDragOver] = useState(false);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [urlInput, setUrlInput] = useState("");
    const fileInputRef = React.useRef(null);

    const handleDragOver = (e) => {
      e.preventDefault();
      setIsDragOver(true);
    };

    const handleDragLeave = () => {
      setIsDragOver(false);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragOver(false);
      const files = Array.from(e.dataTransfer.files);
      handleFiles(files);
    };

    const handleFileSelect = (e) => {
      const files = Array.from(e.target.files);
      handleFiles(files);
    };

    const handleFiles = (files) => {
      const imageFiles = files.filter(file => file.type.startsWith("image/"));
      const newImages = imageFiles.map(file => URL.createObjectURL(file));
      setUploadedImages([...uploadedImages, ...newImages]);
    };

    const handleUrlAdd = () => {
      if (urlInput.trim() && isValidUrl(urlInput)) {
        setUploadedImages([...uploadedImages, urlInput]);
        setUrlInput("");
      }
    };

    const isValidUrl = (url) => {
      try {
        new URL(url);
        return true;
      } catch {
        return false;
      }
    };

    const removeImage = (index) => {
      const newImages = [...uploadedImages];
      newImages.splice(index, 1);
      setUploadedImages(newImages);
    };

    const handleAddImages = () => {
      console.log("Adding images:", uploadedImages);
      setShowImageUploader(false);
      setUploadedImages([]);
    };


    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-semibold text-gray-900">Add Images</h2>
            <button 
              onClick={() => setShowImageUploader(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'upload' 
                  ? 'border-b-2 border-purple-600 text-purple-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Upload className="w-5 h-5 inline mr-2" />
              Upload Files
            </button>
            <button
              onClick={() => setActiveTab('url')}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === 'url' 
                  ? 'border-b-2 border-purple-600 text-purple-600' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Link className="w-5 h-5 inline mr-2" />
              Add from URL
            </button>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[50vh] overflow-y-auto">
            {activeTab === 'upload' ? (
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  isDragOver 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-300 hover:border-purple-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                <div className="flex flex-col items-center">
                  <Upload className="w-12 h-12 text-gray-400 mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Drag and drop images here
                  </p>
                  <p className="text-gray-600 mb-4">
                    or click to browse files
                  </p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
                  >
                    Choose Files
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="url"
                    placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleUrlAdd()}
                  />
                  <button
                    onClick={handleUrlAdd}
                    disabled={!urlInput.trim()}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-sm text-gray-600">
                  Make sure the URL points directly to an image file (jpg, png, gif, etc.)
                </p>
              </div>
            )}

            {/* Preview of uploaded images */}
            {uploadedImages.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Preview ({uploadedImages.length} image{uploadedImages.length !== 1 ? 's' : ''})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {uploadedImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t bg-gray-50">
            <p className="text-sm text-gray-600">
              {uploadedImages.length} image{uploadedImages.length !== 1 ? 's' : ''} ready to upload
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowImageUploader(false)}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleAddImages}
                disabled={uploadedImages.length === 0}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add {uploadedImages.length} Image{uploadedImages.length !== 1 ? 's' : ''}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Detail View Component
  const DetailView = ({ collection }) => {
    return (
      <div className="min-h-screen bg-gray-50 p-6 mt-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mt-4" onClick={handleBackToGallery}>
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">BACK TO GALLERY</span>
          </button>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Heart size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Share2 size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Download size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Category Tag */}
          <div className="inline-block mb-4">
            <span className="text-purple-600 text-sm font-semibold tracking-wide uppercase">
              {collection.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-serif font-semibold text-gray-900 leading-tight mb-6">
            {collection.title}
          </h1>
          {/* Description */}
          <p className="text-gray-600 text-[18px] font-light font-sans leading-relaxed max-w-full mb-8">
            {collection.description}
          </p>

          {/* Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-purple-600" />
              <span className="text-gray-700 text-[14px]">{collection.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Camera size={20} className="text-purple-600" />
              <span className="text-gray-700 text-[14px] ">{collection.photographer}</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-purple-600" />
              <span className="text-gray-700 text-[14px]">{collection.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 text-[14px] font-medium">Client:</span>
              <span className="text-gray-700 text-[14px]">{collection.client}</span>
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-2">Gallery</h2>
              <p className="text-gray-600">View all images from this collection</p>
            </div>
            <button
              onClick={() => setShowImageUploader(true)}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Add Images
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {collection.galleryImages?.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-75 transition-opacity cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => {
                  setSelectedImage(image)
                  setSelectedImageIndex(index)
                }}
              >
                <img
                  src={image || "/placeholder.svg?height=300&width=300"}
                  alt={`${collection.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Image Uploader Modal */}
          {showImageUploader && <ImageUploader />}
        </div>

        {/* Image Modal/Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Previous Button */}
              {selectedImageIndex > 0 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const newIndex = selectedImageIndex - 1
                    setSelectedImageIndex(newIndex)
                    setSelectedImage(collection.galleryImages[newIndex])
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next Button */}
              {selectedImageIndex < collection.galleryImages.length - 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    const newIndex = selectedImageIndex + 1
                    setSelectedImageIndex(newIndex)
                    setSelectedImage(collection.galleryImages[newIndex])
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Full size view"
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                {selectedImageIndex + 1} / {collection.galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // If a collection is selected, show detail view
  if (selectedCollection) {
    return <DetailView collection={selectedCollection} />;
  }

  // Otherwise show gallery view
  return (
    <>
      {/* Gallery-1 */}
      <div className="min-h-[50vh] mt-[70px] bg-[#F8F8F8] px-4 sm:px-6 py-8">
        {/* Back to Home Link */}
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center mb-5">
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-[#1A1A1A] mb-6 sm:mb-8 tracking-tight font-bold font-['serif'] font-light">
              GALLERY
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#666666] font-light leading-relaxed max-w-3xl font-sanc mx-auto">
              A curated collection of our finest moments, captured in timeless elegance.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery-2 */}
      <div className="min-h-screen bg-[#F6F6F6] p-6">
        <div className="max-w-7xl mx-auto">
          {/* Navigation and Search */}
          <div className="w-full bg-light">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category Navigation */}
               <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base transition-colors rounded-full ${
              activeCategory === category
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {category} <span className="hidden sm:inline">({categoryCounts[category]})</span>
          </button>
        ))}
      </div>

              {/* Search and View Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full lg:w-auto mb-4 sm:mb-0">
                {/* Search Bar */}
                <div className="relative w-full sm:w-48 md:w-64 mb-12">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search collections..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] focus:border-transparent w-full"
                  />
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-white border mb-12 border-gray-200 rounded-lg self-start sm:self-auto hover:border-[#8A2BE2] border-[3px] rounded-lg">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-l-lg ${
                      viewMode === "grid" ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-r-lg ${
                      viewMode === "list" ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <List className="w-4 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredCollections.length} collection{filteredCollections.length !== 1 ? "s" : ""}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {/* Collections Grid/List */}
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredCollections.map((collection, index) => (
                <div
                  key={collection._id}
                  className="overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => handleCollectionClick(collection)}
                >
                  <div className="relative group">
                    <img
                      src={`http://localhost:5100/uploads/${collection.image}`}
                      alt={collection.title}
                      className="w-full h-[40vh] object-cover group-hover:opacity-75 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-sans text-gray-900 hover:text-[#8A2BE2] mb-2 transition-colors duration-300">
                      {collection.title}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm mb-1">
                      <Calendar className="w-4 h-4 mr-2 text-[#0056E3]" />
                      {collection.date}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-[#008080]" />
                      {collection.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // List view
            <div className="space-y-4">
              {filteredCollections.map((collection) => (
                <div
                  key={collection._id}
                  className="bg-white h-auto md:h-[46vh] shadow-md p-4 md:p-6 hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:scale-[1.02]"
                  onClick={() => handleCollectionClick(collection)}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                      <div className="relative group overflow-hidden rounded-lg">
                        <img
                          src={`http://localhost:5100/uploads/${collection.image}`}
                          alt={collection.title}
                          className="w-full md:w-[381px] h-auto md:h-[286px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                      </div>
                      <div className="w-full">
                        <h3 className="text-2xl md:text-[36px] font-gray-500 mb-2 md:mb-4 font-serif hover:text-[#8A2BE2] transition-colors duration-300">
                          {collection.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center text-[14px] md:text-[16px] text-gray-600 space-y-2 sm:space-y-0 sm:space-x-4 mt-1 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {collection.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {collection.location}
                          </div>
                        </div>
                        <button
                          className="flex items-center text-[#8A2BE2] text-[14px] hover:text-gray-800 transition-colors duration-300 mt-1 group"
                          style={{ border: "none" }}
                        >
                          View Collection
                          <svg
                            className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {filteredCollections.length === 0 && (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No collections found</h3>
              <p className="text-gray-600">
                {searchTerm
                  ? `No collections match "${searchTerm}". Try a different search term.`
                  : "No collections available in this category."}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}