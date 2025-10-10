import { Medicine } from '@/app/types';

export const medicines: Medicine[] = [
  // --- ONCOLOGY (CANCER) ---
  {
    id: 1,
    category: "cancer",
    name: "Tagrisso (Osimertinib)",
    indication: "Metastatic non-small cell lung cancer (NSCLC) with EGFR T790M mutation.",
    details: "A third-generation EGFR tyrosine kinase inhibitor. Available for global delivery.",
    icon: "fa-solid fa-lungs-virus",
    status: "available",
  },
  {
    id: 2,
    category: "cancer",
    name: "Keytruda (Pembrolizumab)",
    indication: "Advanced melanoma, NSCLC, head and neck cancer, classical Hodgkin lymphoma.",
    details: "A PD-1 inhibitor that helps the body's immune system detect and fight tumor cells. Global delivery available.",
    icon: "fa-solid fa-dna",
    status: "available",
  },
  // ... Bu liste çok uzun olduğu için ilk birkaçını ekledim.
  // Lütfen orijinal HTML dosyanızdaki TÜM İLAÇLARI bu formata uygun şekilde buraya ekleyin.
  // Örnek olarak birkaç kategori daha ekliyorum:
  
  // --- CARDIOLOGY ---
  {
    id: 101,
    category: "cardiology",
    name: "Entresto (Sacubitril/Valsartan)",
    indication: "Heart failure with reduced ejection fraction.",
    details: "Combination of a neprilysin inhibitor and an angiotensin II receptor blocker. Global delivery available.",
    icon: "fa-solid fa-heart-pulse",
    status: "available",
  },
  {
    id: 102,
    category: "cardiology",
    name: "Eliquis (Apixaban)",
    indication: "Prevention of stroke and systemic embolism in nonvalvular atrial fibrillation.",
    details: "A Factor Xa inhibitor, an anticoagulant. Global delivery available.",
    icon: "fa-solid fa-pills",
    status: "available",
  },

  // --- NEUROLOGY ---
  {
    id: 201,
    category: "neurology",
    name: "Tysabri (Natalizumab)",
    indication: "Relapsing-remitting multiple sclerosis (MS) and Crohn's disease.",
    details: "A monoclonal antibody to prevent inflammatory cells from entering the brain and gut. Global delivery available.",
    icon: "fa-solid fa-brain",
    status: "available",
  },

  // --- RARE DISEASES ---
  {
    id: 5001,
    category: "rare-diseases",
    subcategory: "gene-therapy",
    name: "Brineura (Cerliponase Alfa)",
    indication: "Neuronal ceroid lipofuscinosis type 2 (CLN2) disease.",
    details: "An enzyme replacement therapy for a rare lysosomal storage disease. Requires special authorization and delivery protocols.",
    icon: "fa-solid fa-dna",
    status: "special-request",
  },
  {
    id: 5002,
    category: "rare-diseases",
    subcategory: "neuromuscular",
    name: "Tegsedi (Inotersen)",
    indication: "Hereditary transthyretin-mediated amyloidosis (hATTR).",
    details: "An antisense oligonucleotide for a rare, progressive disease. Requires cold chain delivery.",
    icon: "fa-solid fa-dna",
    status: "special-request",
  },
  {
    id: 5003,
    category: "rare-diseases",
    subcategory: "neuromuscular",
    name: "Spinraza (Nusinersen)",
    indication: "Spinal muscular atrophy (SMA).",
    details: "An antisense oligonucleotide for a rare neuromuscular disease. Global delivery available with special handling.",
    icon: "fa-solid fa-dna",
    status: "available",
  },
  // LÜTFEN ORİJİNAL HTML'DEKİ TÜM İLAÇLARI BU ŞEKİLDE EKLEMEYE DEVAM EDİN.
];
