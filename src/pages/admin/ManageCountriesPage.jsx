import { useState } from "react";
import { Plus, Edit, Trash2, Search, X, PlusCircle, MinusCircle, AlertCircle, UploadCloud, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { dummyCountries } from "@/assets/dummy";

const emptyForm = {
  country: "",
  title: "",
  subtitle: "",
  description: [""],
  image: "",
  imageFile: null,
};

const ManageCountriesPage = () => {
  const [search, setSearch] = useState("");
  // Let's use a local copy of dummyCountries so we can fake edits
  const [countriesList, setCountriesList] = useState(
    dummyCountries.map((c, i) => ({ id: i + 1, ...c }))
  );
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  // Data states
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState(emptyForm);

  // Derived state
  const filteredCountries = countriesList.filter((c) => 
    c.country.toLowerCase().includes(search.toLowerCase()) || 
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handlers
  const openAddModal = () => {
    setModalMode("add");
    setFormData(emptyForm);
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setModalMode("edit");
    setSelectedId(item.id);
    setFormData({
      country: item.country,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description && item.description.length > 0 ? item.description : [""],
      image: typeof item.img === "string" ? item.img : "", // it might be an imported asset object in dummy data
      imageFile: null
    });
    setIsModalOpen(true);
  };

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    setCountriesList(countriesList.filter(c => c.id !== selectedId));
    setIsDeleteModalOpen(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (modalMode === "add") {
      const newCountry = {
        id: Date.now(),
        country: formData.country,
        title: formData.title,
        subtitle: formData.subtitle,
        description: formData.description.filter(d => d.trim() !== ""),
        img: formData.image
      };
      setCountriesList([newCountry, ...countriesList]);
    } else {
      setCountriesList(countriesList.map(c => c.id === selectedId ? {
        ...c,
        country: formData.country,
        title: formData.title,
        subtitle: formData.subtitle,
        description: formData.description.filter(d => d.trim() !== ""),
        img: formData.image || c.img
      } : c));
    }
    setIsModalOpen(false);
  };

  // Description dynamic paragraphs array
  const addParagraph = () => {
    setFormData({ ...formData, description: [...formData.description, ""] });
  };

  const removeParagraph = (index) => {
    const newDesc = [...formData.description];
    newDesc.splice(index, 1);
    setFormData({ ...formData, description: newDesc.length > 0 ? newDesc : [""] });
  };

  const updateParagraph = (index, value) => {
    const newDesc = [...formData.description];
    newDesc[index] = value;
    setFormData({ ...formData, description: newDesc });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl, imageFile: file });
    }
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:outline-none transition-shadow selection:bg-primary/20"
          />
        </div>
        <button 
          onClick={openAddModal}
          className="flex items-center gap-2 bg-gradient-hero text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:shadow-glow transition-shadow"
        >
          <Plus className="h-4 w-4" /> Add Destination
        </button>
      </div>

      <div className="rounded-xl bg-card shadow-card overflow-hidden border border-border/50">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted border-b border-border/50">
              <tr>
                {["Country", "Title", "Subtitle", "Paragraphs", "Actions"].map((h) => (
                  <th key={h} className="px-6 py-4 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {filteredCountries.map((c) => (
                <tr key={c.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-bold text-foreground capitalize">{c.country}</td>
                  <td className="px-6 py-4 text-muted-foreground">{c.title}</td>
                  <td className="px-6 py-4 text-muted-foreground">{c.subtitle}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                      {c.description?.length || 0} Paras
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button onClick={() => openEditModal(c)} className="p-1.5 rounded-lg hover:bg-tropical-sky/10 text-tropical-sky transition-colors cursor-pointer"><Edit className="h-4 w-4" /></button>
                      <button onClick={() => openDeleteModal(c.id)} className="p-1.5 rounded-lg hover:bg-destructive/10 text-destructive transition-colors cursor-pointer"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredCountries.length === 0 && (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-muted-foreground">
                    No destinations found matching your search.
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
              <div className="flex justify-between items-center gap-4 p-5 sm:p-6 border-b border-border bg-muted/30 flex-shrink-0">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-tropical-coral" />
                  {modalMode === "add" ? "Add New Destination" : "Edit Destination"}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 flex-shrink-0 hover:bg-muted font-bold rounded-full transition-colors text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto custom-scrollbar flex-1">
                <form id="country-form" onSubmit={handleSave} className="space-y-6 sm:space-y-8">
                  {/* Basic Info */}
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg border-b border-border pb-2 mb-4">Destination Identity</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-foreground mb-1">Country / Key Identifier *</label>
                        <input type="text" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} required className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" placeholder="e.g. Singapore" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Headline Title *</label>
                        <input type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" placeholder="e.g. Experience Singapore's Heritage" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Subtitle</label>
                        <input type="text" value={formData.subtitle} onChange={e => setFormData({...formData, subtitle: e.target.value})} className="w-full border border-input bg-background px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none" placeholder="e.g. A Melting Pot of Cultures" />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Paragraphs */}
                  <div>
                    <div className="flex justify-between items-center mb-2 border-b border-border pb-2">
                      <h4 className="font-semibold text-base sm:text-lg">Description Paragraphs</h4>
                      <button type="button" onClick={addParagraph} className="flex items-center gap-1 text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors px-3 py-1.5 rounded-lg font-medium">
                        <PlusCircle className="h-4 w-4" /> Add Paragraph
                      </button>
                    </div>
                    
                    <div className="space-y-4 pt-2">
                      {formData.description.map((para, index) => (
                        <div key={index} className="flex gap-2 items-start relative box-border bg-muted/20 p-1 rounded-xl">
                          <div className="flex-1 w-full relative">
                            <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs pointer-events-none">
                              {index + 1}
                            </span>
                            <textarea 
                              value={para} 
                              onChange={e => updateParagraph(index, e.target.value)} 
                              required 
                              className="w-full h-24 border border-input bg-background pl-12 pr-4 py-3 text-sm rounded-lg focus:ring-2 focus:ring-primary transition-shadow outline-none resize-y shadow-sm" 
                              placeholder={`Paragraph ${index + 1} content...`}
                            ></textarea>
                          </div>
                          {formData.description.length > 1 && (
                            <button type="button" onClick={() => removeParagraph(index)} className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors flex-shrink-0 mt-2 absolute right-2 top-0 bg-background shadow-sm border border-border/50">
                              <MinusCircle className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg border-b border-border pb-2 mb-4">Hero Image</h4>
                    {formData.image ? (
                      <div className="relative w-full h-48 sm:h-64 rounded-xl border border-border overflow-hidden group shadow-sm">
                        <img src={formData.image} alt="Destination Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                          <button type="button" onClick={() => setFormData({...formData, image: "", imageFile: null})} className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-glow transition-all">
                            <Trash2 className="w-4 h-4" /> Remove Media
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-full h-48 sm:h-64 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer relative shadow-inner">
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <UploadCloud className="w-7 h-7 text-primary" />
                        </div>
                        <p className="text-sm font-semibold text-foreground">Click or drop hero image here</p>
                        <p className="text-xs text-muted-foreground mt-2">Recommended resolution: 1920x1080 (WEBP/JPG)</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* Footer Actions */}
              <div className="p-4 sm:p-6 border-t border-border bg-card flex justify-end gap-3 flex-shrink-0">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors">
                  Cancel
                </button>
                <button type="submit" form="country-form" className="px-6 py-2.5 rounded-lg font-semibold bg-gradient-hero text-primary-foreground shadow-sm hover:shadow-glow transition-all">
                  Save Destination
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
              <h3 className="text-xl font-bold font-display text-foreground mb-2">Delete Destination?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Are you sure you want to delete this destination? This removes all associated content immediately.
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

export default ManageCountriesPage;
