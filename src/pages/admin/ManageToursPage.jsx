import { useState, useContext } from "react";
import { Plus, Edit, Trash2, Search, X, PlusCircle, MinusCircle, AlertCircle, UploadCloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "@/context/context";
import { useNavigate } from "react-router-dom";

const initialTours = [
  { id: 1, name: "Singapore City Explorer", country: "Singapore", duration: "4D/3N", status: "Active" },
  { id: 2, name: "KL & Highlands Escape", country: "Malaysia", duration: "5D/4N", status: "Active" },
  { id: 3, name: "Beach Paradise Combo", country: "Both", duration: "7D/6N", status: "Active" },
  { id: 4, name: "Foodie Trail", country: "Both", duration: "3D/2N", status: "Draft" },
  { id: 5, name: "Family Fun Package", country: "Both", duration: "6D/5N", status: "Active" },
  { id: 6, name: "Adventure Seeker", country: "Malaysia", duration: "5D/4N", status: "Active" },
];

const emptyForm = {
  title: "",
  country: "",
  image: "",
  imageFile: null,
  durationDays: "",
  durationNights: "",
  people: "",
  rating: "",
  description: "",
  overview: "",
  includes: [],
  itinerary: [{ title: "", description: "" }],
  status: ""
};

const ManageToursPage = () => {
  const { countries } = useContext(AppContext)
  const [search, setSearch] = useState("");
  const navigate = useNavigate()
  const [tours, setTours] = useState(initialTours);
  const countires = countries.map((item) => item.country)
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Data states
  const [selectedTourId, setSelectedTourId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);

  // Derived state
  const filteredTours = tours.filter((t) => t.name.toLowerCase().includes(search.toLowerCase()));

  // Handlers
  const openAddModal = () => {
    setModalMode("add");
    setFormData(emptyForm);
    setIsModalOpen(true);
  };

  const openEditModal = (tour) => {
    setModalMode("edit");
    setSelectedTourId(tour.id);
    // In a real app we would load full details, but here we just map what we have
    setFormData({
      ...emptyForm,
      title: tour.name,
      country: tour.country,
      status: tour.status,
      // parsing duration e.g. "4D/3N"
      durationDays: tour.duration.split("D")[0] || "",
      durationNights: tour.duration.split("/")[1]?.split("N")[0] || "",
      image: tour.image || "",
      includes: Array.isArray(tour.includes) && tour.includes.length > 0 ? tour.includes : (typeof tour.includes === 'string' && tour.includes ? tour.includes.split(',').map(i => i.trim()) : [""])
    });
    setIsModalOpen(true);
  };

  const openDeleteModal = (tourId) => {
    setSelectedTourId(tourId);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    setTours(tours.filter(t => t.id !== selectedTourId));
    setIsDeleteModalOpen(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      const newTour = {
        id: Date.now(),
        name: formData.title,
        country: formData.country,
        image: formData.image,
        duration: `${formData.durationDays}D/${formData.durationNights}N`,
        status: formData.status,
        includes: formData.includes.filter(i => i.trim() !== "")
      };
      setTours([newTour, ...tours]);
    } else {
      setTours(tours.map(t => t.id === selectedTourId ? {
        ...t,
        name: formData.title,
        country: formData.country,
        image: formData.image,
        duration: `${formData.durationDays}D/${formData.durationNights}N`,
        status: formData.status,
        includes: formData.includes.filter(i => i.trim() !== "")
      } : t));
    }
    setIsModalOpen(false);
  };

  // Itinerary dynamic fields
  const handleDaysChange = (e) => {
    const value = e.target.value;
    const days = parseInt(value) || 0;

    let newItinerary = [...formData.itinerary];

    if (days > 0) {
      if (days > newItinerary.length) {
        for (let i = newItinerary.length; i < days; i++) {
          newItinerary.push({ day: i + 1, title: "", description: "" });
        }
      } else if (days < newItinerary.length) {
        newItinerary = newItinerary.slice(0, days);
      }
    }

    setFormData({
      ...formData,
      durationDays: value,
      itinerary: newItinerary.length > 0 ? newItinerary : [{ day: 1, title: "", description: "" }]
    });
  };

  const addInclude = () => {
    setFormData({ ...formData, includes: [...formData.includes, ""] });
  };

  const removeInclude = (index) => {
    const newIncludes = [...formData.includes];
    newIncludes.splice(index, 1);
    setFormData({ ...formData, includes: newIncludes.length > 0 ? newIncludes : [""] });
  };

  const updateInclude = (index, value) => {
    const newIncludes = [...formData.includes];
    newIncludes[index] = value;
    setFormData({ ...formData, includes: newIncludes });
  };

  const addItineraryDay = () => {
    const currentDays = parseInt(formData.durationDays) || formData.itinerary.length;
    setFormData({
      ...formData,
      durationDays: String(currentDays + 1),
      itinerary: [...formData.itinerary, { day: formData.itinerary.length + 1, title: "", description: "" }]
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl, imageFile: file });
    }
  };

  const removeItineraryDay = (index) => {
    const newItin = [...formData.itinerary];
    newItin.splice(index, 1);
    newItin.forEach((item, i) => item.day = i + 1);

    const currentDays = parseInt(formData.durationDays) || (newItin.length + 1);

    setFormData({
      ...formData,
      durationDays: String(Math.max(1, currentDays - 1)),
      itinerary: newItin.length > 0 ? newItin : [{ day: 1, title: "", description: "" }]
    });
  };

  const updateItinerary = (index, field, value) => {
    const newItin = [...formData.itinerary];
    newItin[index][field] = value;
    setFormData({ ...formData, itinerary: newItin });
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search tours..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-shadow selection:bg-primary/20"
          />
        </div>
        <button
          onClick={openAddModal}
          className="flex items-center gap-2 bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:shadow-glow transition-shadow"
        >
          <Plus className="h-4 w-4" /> Add Tour
        </button>
      </div>

      <div className="rounded-xl bg-card shadow-card overflow-hidden border border-border/50">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted border-b border-border/50">
              <tr>
                {["Name", "Country", "Duration", "Status", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filteredTours.map((t) => (
                <tr key={t.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{t.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{t.country}</td>
                  <td className="px-6 py-4 text-muted-foreground">{t.duration}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${t.status === "Active" ? "bg-tropical-emerald/10 text-tropical-emerald border border-tropical-emerald/20" : "bg-muted text-muted-foreground border border-border"}`}>
                      {t.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => openEditModal(t)} className="p-1.5 rounded-lg hover:bg-tropical-sky/10 text-tropical-sky transition-colors cursor-pointer"><Edit className="h-4 w-4" /></button>
                      <button onClick={() => openDeleteModal(t.id)} className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredTours.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">
                    No tours found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 backdrop-blur-sm p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-card w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] rounded-2xl shadow-elevated flex flex-col relative border border-border overflow-hidden"
            >
              <div className="flex justify-between items-start sm:items-center gap-4 p-5 sm:p-6 border-b border-border bg-muted/30 flex-shrink-0">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-tight">
                  {modalMode === "add" ? "Add New Tour" : "Edit Tour Details"}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 flex-shrink-0 hover:bg-muted font-bold rounded-full transition-colors text-muted-foreground hover:text-foreground hover:shadow-sm"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1">
                <form id="tour-form" onSubmit={handleSave} className="space-y-6 sm:space-y-8">
                  {/* Basic Info */}
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg border-b border-border pb-2 mb-4 flex items-center">Basic Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Title *</label>
                        <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} required className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" placeholder="e.g. Singapore Explorer" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Country *</label>
                        <select
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                          onChange={(e) => {
                            if (e.target.value === "add new") {
                              navigate("/admin/countries");
                            }
                          }}
                        >
                          <option value="null">Select category</option>
                          {countires.map((country, index) => (
                            <option key={index} value={country}>
                              {country}
                            </option>
                          ))}
                          <option value="add new">Add New Country</option>
                        </select>

                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-1">Tour Image</label>
                        {formData.image ? (
                          <div className="relative w-full h-40 sm:h-48 rounded-xl border border-border overflow-hidden group">
                            <img src={formData.image} alt="Tour Preview" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                              <button type="button" onClick={() => setFormData({ ...formData, image: "", imageFile: null })} className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-glow transition-all">
                                <Trash2 className="w-4 h-4" /> Remove Image
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="w-full h-40 sm:h-48 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer relative">
                            <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                              <UploadCloud className="w-6 h-6 text-primary" />
                            </div>
                            <p className="text-sm font-semibold text-foreground">Click or drag image to upload</p>
                            <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP up to 5MB</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg border-b border-border pb-2 mb-4">Tour Specifics</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Days *</label>
                        <input type="number" value={formData.durationDays} onChange={handleDaysChange} required className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" min="1" placeholder="e.g. 4" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Nights *</label>
                        <input type="number" value={formData.durationNights} onChange={e => setFormData({ ...formData, durationNights: e.target.value })} required className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" min="0" placeholder="e.g. 3" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">People</label>
                        <input type="text" value={formData.people} onChange={e => setFormData({ ...formData, people: e.target.value })} className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" placeholder="e.g. 2-6" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Rating</label>
                        <input type="number" step="0.1" max="5" min="0" value={formData.rating} onChange={e => setFormData({ ...formData, rating: e.target.value })} className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" placeholder="e.g. 4.9" />
                      </div>
                    </div>
                  </div>

                  {/* Text Areas */}
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg border-b border-border pb-2 mb-4">Content</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Short Description</label>
                        <input type="text" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" placeholder="Quick one-liner about the tour..." />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Overview</label>
                        <textarea value={formData.overview} onChange={e => setFormData({ ...formData, overview: e.target.value })} className="w-full h-24 border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none resize-y" placeholder="Full details of exactly what to expect..."></textarea>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-sm font-medium text-foreground">Includes</label>
                          <button type="button" onClick={addInclude} className="flex items-center gap-1 text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-2.5 py-1.5 rounded-md font-medium">
                            <PlusCircle className="h-3.5 w-3.5" /> Add Include
                          </button>
                        </div>
                        <div className="space-y-3">
                          {formData.includes.map((inc, index) => (
                            <div key={index} className="flex gap-2 items-center">
                              <input type="text" value={inc} onChange={e => updateInclude(index, e.target.value)} required className="flex-1 w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" placeholder="e.g. Airport transfer" />
                              {formData.includes.length > 1 && (
                                <button type="button" onClick={() => removeInclude(index)} className="p-2.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors flex-shrink-0">
                                  <MinusCircle className="h-5 w-5" />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Itinerary */}
                  <div>
                    <div className="flex justify-between items-center border-b border-border pb-2 mb-4">
                      <h4 className="font-semibold text-base sm:text-lg">Itinerary</h4>
                      <button type="button" onClick={addItineraryDay} className="flex items-center gap-1 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5 rounded-lg font-medium">
                        <PlusCircle className="h-4 w-4" /> Add Day
                      </button>
                    </div>

                    <div className="space-y-4">
                      {formData.itinerary.map((day, index) => (
                        <div key={index} className="flex flex-col sm:flex-row gap-4 items-start bg-muted/40 p-4 rounded-xl border border-border/50">
                          <div className="flex items-center justify-between w-full sm:w-auto">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 sm:mt-6">
                              {day.day}
                            </div>
                            {formData.itinerary.length > 1 && (
                              <button type="button" onClick={() => removeItineraryDay(index)} className="sm:hidden p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                                <MinusCircle className="h-5 w-5" />
                              </button>
                            )}
                          </div>
                          <div className="flex-1 space-y-3 w-full">
                            <div>
                              <label className="block text-xs font-medium text-muted-foreground mb-1">Day Title</label>
                              <input type="text" value={day.title} onChange={e => updateItinerary(index, "title", e.target.value)} required className="w-full border border-input bg-background px-3 py-2 text-sm rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" placeholder="e.g. Arrival & City Walk" />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-muted-foreground mb-1">Activities Description</label>
                              <textarea value={day.description} onChange={e => updateItinerary(index, "description", e.target.value)} required className="w-full h-16 border border-input bg-background px-3 py-2 text-sm rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none resize-y" placeholder="Details of the day's events..."></textarea>
                            </div>
                          </div>
                          {formData.itinerary.length > 1 && (
                            <button type="button" onClick={() => removeItineraryDay(index)} className="hidden sm:block p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors mt-6 flex-shrink-0">
                              <MinusCircle className="h-5 w-5" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Status</label>
                    <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none appearance-none">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </form>
              </div>

              {/* Footer Actions */}
              <div className="p-4 sm:p-6 border-t border-border bg-card flex justify-end gap-3 flex-shrink-0">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors flex-shrink-0">
                  Cancel
                </button>
                <button type="submit" form="tour-form" className="px-6 py-2.5 rounded-lg font-semibold bg-gradient-hero text-primary-foreground shadow-sm hover:shadow-glow transition-all flex-shrink-0">
                  Save Tour
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {isDeleteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="bg-card w-full max-w-sm rounded-2xl shadow-elevated p-6 text-center border border-border/50"
            >
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4 text-destructive">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">Delete Tour?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Are you sure you want to delete this tour? This action cannot be undone.
              </p>
              <div className="flex gap-3 w-full">
                <button onClick={() => setIsDeleteModalOpen(false)} className="flex-1 px-4 py-2.5 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors">
                  Cancel
                </button>
                <button onClick={handleDelete} className="flex-1 px-4 py-2.5 rounded-lg font-semibold bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-glow transition-all">
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ManageToursPage;
