import { useState } from 'react';
import { Pill, Search, Filter, ChevronDown, Package, Beaker, Syringe, Droplets, FlaskRound } from 'lucide-react';

const ProductsServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    // Capsules
    {
      name: "AQUNEXT",
      composition: "AFLAPIN(BOSWELLIA SERRATA EXTRACT-0.100 G+ CURQLIFE (CURCUMA LONGA)-0.100 G+ NATIVE (UNDENATURED COLLAGEN TYPE II 4%)-0.040 G + MOBILEE (CONTAINS SODIUM HYALURONATE, POLYSACCHARIDES & COLLAGEN)-0.040 G",
      category: "capsules",
      type: "Joint Health"
    },
    {
      name: "BECOFOL",
      composition: "FOLIC ACID + LACTIC ACID BACILLUS + VITAMIN C + VITAMIN B - COMPLEX",
      category: "capsules",
      type: "Nutritional Supplement"
    },
    {
      name: "BECOFOL CoQ",
      composition: "UBIDECARENONE(CO-ENZYME Q10)-50 MG + OMEGA 3 FATTY ACID-150 MG + LYCOPENE 10%-4000MCG + SELENIUM AS SELENIUM SELENATE-40 MCG",
      category: "capsules",
      type: "Antioxidant"
    },
    {
      name: "BECOFOL - TM",
      composition: "LYCOPENE - 4000 MCG + MULTI VATAMINS + VITAMIN A - 5000 IU",
      category: "capsules",
      type: "Multivitamin"
    },
    {
      name: "ACTRAMOL",
      composition: "TRAMADOL HCL-37.5 MG + PARACETAMOL-325 MG",
      category: "capsules",
      type: "Pain Relief"
    },
    {
      name: "AEROBON-DM",
      composition: "DIACEREIN-50 MG + GLUCOSAMINE SULFATE KCL-750 MG + METHYLSULFONYLMETHANE-250 MG",
      category: "capsules",
      type: "Joint Care"
    },
    {
      name: "AEROBON-QR",
      composition: "GLUCOSAMINE SULFATE-750 MG + METHYLSULFONYLMETHANE-200 MG + RUTIN-100 MG + QUERCETIN-100 MG",
      category: "capsules",
      type: "Joint Care"
    },
    {
      name: "ARMELUF - 80",
      composition: "ARTEMETHER - 480 mg + LUMIFANTRINE - 80 mg",
      category: "capsules",
      type: "Antimalarial"
    },
    {
      name: "GLUTION",
      composition: "L-GLUTATHIONE-500 MG + ALPHA LIPOIC ACID-100 MG + GRAPE SEED EXTRACT-100 MG + ASCORBIC ACID-80 MG + NIACINAMIDE-18 MG + VIT E 50% -20 MG",
      category: "capsules",
      type: "Antioxidant"
    },
    {
      name: "ESMYLE D 20",
      composition: "ESOMEPRAZOLE MAGNESIUM TRIHYDRATE-20 MG + DOMPERIDONE-10 MG",
      category: "capsules",
      type: "Gastric"
    },
    {
      name: "FOXY - OZ",
      composition: "OFLOXACIN - 200 + ORNIDAZOLE - 500 mg",
      category: "capsules",
      type: "Antibiotic"
    },
    {
      name: "JAICAL",
      composition: "CALCIUM CITRATE - 1000 mg + MAGNESIUM - 100 mg + VITAMIN D3 - 200 IU + ZINC - 4 mg",
      category: "capsules",
      type: "Bone Health"
    },
    {
      name: "ORGNISE-SPAS",
      composition: "DROTAVERINE HCL-80 MG",
      category: "capsules",
      type: "Antispasmodic"
    },
    {
      name: "ORGNISE-P",
      composition: "ACECLOFENAC-100 MG , PARACETAMOL-325 MG",
      category: "capsules",
      type: "Pain Relief"
    },
    {
      name: "ORGNISE-ASP",
      composition: "ACECLOFENAC-100 MG, SERRATIOPEPTIDASE-15 MG, PARACETAMOL-325 MG",
      category: "capsules",
      type: "Anti-inflammatory"
    },
    {
      name: "JAIFIX-XL",
      composition: "CEFIXIME-200 mg",
      category: "capsules",
      type: "Antibiotic"
    },
    {
      name: "JAIFIX-O",
      composition: "CEFIXIME-200 MG, OFLOXACIN-200 MG",
      category: "capsules",
      type: "Antibiotic"
    },
    {
      name: "MONTERA-L",
      composition: "LEVOCETRIZINE DIHCL-5 MG + MONTELUKAST SODIUM- 10 MG",
      category: "capsules",
      type: "Respiratory"
    },
    {
      name: "ORZYME PLUS",
      composition: "Pancreatin-175 mg, Activated Charcoal-50 mg, Activated Dimethicone-50 mg",
      category: "capsules",
      type: "Digestive"
    },
    {
      name: "CARBOFOL-Z",
      composition: "Ferrous Ascorbate-100 mg, Folic Acid-1.5 mg",
      category: "capsules",
      type: "Iron Supplement"
    },
    {
      name: "CALBRITTA-XT",
      composition: "L-CITRULLINE-600 MG + L-ARGININE-400 MG + CALCIUM CITRATE-150 MG + ZINC SULPHATE - 12 MG + VIT B6-1.6 MG",
      category: "capsules",
      type: "Nutritional"
    },
    {
      name: "CALBRITTA FORTE",
      composition: "L-ARGININE-1000 MG + L-LYSINE MONOHYDRATE-200MG+ ZINC SULPHATE-61.8 MG + CALCIUM CITRATE-100 MG + VIT B6-1.5 MG",
      category: "capsules",
      type: "Nutritional"
    },
    {
      name: "DAPAF LOZ-MET ER 10/500",
      composition: "DAPAGLIFLOZIN-10 MG + METFORMIN HCL-500 MG",
      category: "capsules",
      type: "Diabetes"
    },
    {
      name: "DAPAF LOZ-MET ER 10/1000",
      composition: "DAPAGLIFLOZIN-10 MG + METFORMIN HCL-1000 MG",
      category: "capsules",
      type: "Diabetes"
    },
    {
      name: "EDIQUIT",
      composition: "TRYPSIN-72 MG + CHYMOTRYPSIN-12 MG + BROMELAIN-135 MG + RUTOSIDE TRIHYDRATE-150 MG",
      category: "capsules",
      type: "Enzyme"
    },
    {
      name: "EDIQUIT-DS",
      composition: "TRYPSIN-96 MG + BROMELAIN-180 MG + RUTOSIDE TRIHYDRATE-200 MG",
      category: "capsules",
      type: "Enzyme"
    },
    {
      name: "RIFAST-400",
      composition: "RIFAXIMIN-400 MG",
      category: "capsules",
      type: "Antibiotic"
    },
    {
      name: "REVERSYN",
      composition: "WITHANIA SOMNIFERA EXTRACT-250 MG + N-ACETYLGLUCOSAMINE-200 MG + SILYMARINE EXTRACT-150 MG + BOSEWELLIA EXTRACT-125 MG + ZINIBER OFFICENALIS EXTRACT-24 MG + CURCUMA LONGA EXTRACT-18 MG",
      category: "capsules",
      type: "Herbal"
    },
    {
      name: "SPRIDE-25",
      composition: "LEVOSULPRIDE-25 MG",
      category: "capsules",
      type: "Gastric"
    },
    {
      name: "TAPEX- SR 50",
      composition: "TAPENTADOL-25 MG",
      category: "capsules",
      type: "Pain Relief"
    },

    // Injections
    {
      name: "VIJDEC - 25",
      composition: "NANDROLONE DECANOATE - 25 mg",
      category: "injections",
      type: "Anabolic"
    },
    {
      name: "B-CEON - 1gm",
      composition: "CEFTRIAXONE- 1 gm",
      category: "injections",
      type: "Antibiotic"
    },

    // Syrups
    {
      name: "CARBOFOL-Z",
      composition: "FERROUS ASCORBATE - 30 MG + FOLIC ACID-1.5 G IN EACH 5 ML",
      category: "syrups",
      type: "Iron Supplement"
    },
    {
      name: "KAMFART",
      composition: "AMBROXOL - 15 mg + GUAIPHENSIN - 50 mg + MENTHOL-25 mg + TERBUTALINE - 125 mg IN EACH 5 ml SORBITOL BASE",
      category: "syrups",
      type: "Cough Relief"
    },
    {
      name: "KAMFART - D",
      composition: "BROMHEXINE HCI - 4 mg + DEXTROMETHORPHAN HBR - 5 mg + MENTHOL - 2.5 mg + AMMONIUM CHLORIDE - 50 mg IN EACH 5 ml SORBITOL BASE",
      category: "syrups",
      type: "Cough Relief"
    },
    {
      name: "LIVLITE",
      composition: "AYURVEDIC PREPRATION",
      category: "syrups",
      type: "Liver Care"
    },
    {
      name: "ORZYME",
      composition: "FUNGAL DIASTASE + PEPSIN LIQ",
      category: "syrups",
      type: "Digestive"
    },
    {
      name: "BIORAFT SYP",
      composition: "SODIUM ALGINATE-250 MG + SODIUM BI-CARBONATE-133.5 MG + CALCIUM CARBONATE-88.0 MG",
      category: "syrups",
      type: "Antacid"
    },
    {
      name: "LIVLITE PLUS",
      composition: "CYPROHEPTADINE HCL-2 MG, TRICHOLINE CITRATE-275 MG",
      category: "syrups",
      type: "Appetite Stimulant"
    },

    // POWDERS
    {
      name: "DIOPROT PROTEIN POWDER",
      composition: "MILK PROTEIN ENRICH WITH VITAMINS, MINERALS & TRACE AMINO ACID | CHOCOLATE & VANILLA FLAVOUR",
      category: "powders",
      type: "Nutritional Supplement"
    },
    {
      name: "FIBREX",
      composition: "FIBREX - 90 GM | FIBREX - 270 GM",
      category: "powders",
      type: "Digestive Health"
    },
    {
      name: "SUPIPEP SACHET",
      composition: "COLLAGEN PEPTIDE-10 GM, CALCIUM CARBONATE-500 MG, METHYLCOBALAMINE-100 MCG, VIT D₃ (CHOLECALCIFEROL)-50 I.U.",
      category: "powders",
      type: "Bone & Joint Health"
    },
    {
      name: "LACTITOL + ISPAGHULA",
      composition: "LACTITOL-10 GM + ISPAGHULA-3.5 GM HUSK POWDER IN EACH 15 GM SERVING",
      category: "powders",
      type: "Digestive Health"
    }

  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: Package },
    { id: 'capsules', name: 'Capsules', icon: Pill },
    { id: 'injections', name: 'Injections', icon: Syringe },
    { id: 'syrups', name: 'Syrups', icon: Droplets },
    { id: 'powders', name: 'Powders', icon: FlaskRound }
  ];

  const equipments = [  
    {
      name: "NEBULIZERS",
      description: "COMPRESSOR, ULTRASONIC",
    },
    {
      name: "AERONAB-PRO",
      description: "NEBULIZER FOR ANY VENTILATOR",
    },
    {
      name: "PULSE OXIMETER",
      description: "Device for measuring oxygen saturation",
    },
    {
      name: "NON INVASIVE VENTILATORS",
      description: "RESMED INDIA LTD",
    },
    {
      name: "SLEEP SCREENING DEVICES",
      description: "Devices for sleep apnea and screening",
    },
    {
      name: "CPAP, BIPAP DEVICES",
      description: "Devices for assisted breathing",
    },
    {
      name: "OXYGEN CONCENTRATORS",
      description: "Medical oxygen supply devices",
    }
  ];


  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-100 to-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Package className="w-4 h-4 mr-2" />
              Pharmaceutical Products
            </div>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                Products &
              </span>
              <br />
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Comprehensive range of pharmaceutical products including capsules, injections, and syrups
              for various therapeutic areas and healthcare needs.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8 border border-white/50 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products by name, composition, or type..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium appearance-none"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map(category => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${selectedCategory === category.id
                      ? 'bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-slate-600 font-medium">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const categoryInfo = categories.find(cat => cat.id === product.category);
              const IconComponent = categoryInfo?.icon || Package;

              return (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/50"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-4 rounded-2xl shadow-lg group-hover:from-sky-200 group-hover:to-blue-200 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-blue-600" />
                      </div>
                      <span className="inline-block bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-semibold">
                        {product.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Composition</h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {product.composition}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${product.category === 'capsules' ? 'bg-blue-100 text-blue-800' :
                        product.category === 'injections' ? 'bg-red-100 text-red-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                        <IconComponent className="w-3 h-3 mr-1" />
                        {categoryInfo?.name}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl p-12 border border-white/50 max-w-md mx-auto">
                <Beaker className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">No Products Found</h3>
                <p className="text-slate-600 font-medium">Try adjusting your search terms or filters.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-blue-500/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-6 leading-tight">
                Equipments
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {equipments.map((m) => {
                return (
                  <div className="text-center">
                    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
                        <div className="text-xl font-black mb-2">{m.name}</div>
                        <div className="text-sky-200 text-sm font-medium">{m.description}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsServices;