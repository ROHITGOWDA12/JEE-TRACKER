/* ========================================
   JEE 2027 & KCET Preparation Tracker
   Main Application Logic — Enhanced Edition
   ======================================== */

// ===== DATA: Complete 86-chapter dataset =====

const CHAPTERS_DATA = {
    physics: {
        heavyLifters: [
            { id: 'ph-01-units', num: 1, name: 'Units, Dimensions & Measurement', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~5%', topic: 'Dimensional analysis, Errors', jeeFreq: 46 },
            { id: 'ph-07-rotation', num: 7, name: 'Rotational Motion', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: '~4%', topic: 'Rolling Motion', jeeFreq: 14 },
            { id: 'ph-13-thermo', num: 13, name: 'Heat & Thermodynamics', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: '~8%', topic: 'Isothermal, Isobaric, Adiabatic Process', jeeFreq: 48 },
            { id: 'ph-15-electrostatics', num: 15, name: 'Electrostatics', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: '~7%', topic: 'Coulomb\'s Law, Electric Field', jeeFreq: 0 },
            { id: 'ph-17-current', num: 17, name: 'Current Electricity', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: '~7%', topic: 'Ammeter, Voltmeter, Combinations', jeeFreq: 26 },
            { id: 'ph-23-ray', num: 23, name: 'Ray Optics', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: '~8%', topic: 'Thin Lens, Lens Maker Formula', jeeFreq: 20 },
            { id: 'ph-25-modern', num: 25, name: 'Modern Physics (Dual Nature, Atoms, Nuclei)', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: '~8%', topic: 'Bohr Model, Nucleus Composition', jeeFreq: 34 },
        ],
        smartLifters: [
            { id: 'ph-04-wpe', num: 4, name: 'Work, Energy & Power', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~5%', topic: 'Work-Energy Theorem', jeeFreq: 0 },
            { id: 'ph-08-gravitation', num: 8, name: 'Gravitation', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '~5%', topic: 'Satellite Orbits, g Variation', jeeFreq: 25 },
            { id: 'ph-22-em-waves', num: 22, name: 'Electromagnetic Waves', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~3%', topic: 'EM Wave Equation, Speed, Frequency', jeeFreq: 15 },
            { id: 'ph-24-wave-optics', num: 24, name: 'Wave Optics', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~6%', topic: 'Young\'s Double-Slit Experiment', jeeFreq: 17 },
            { id: 'ph-26-photoelectric', num: 26, name: 'Photoelectric Effect & Radiation', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '~4%', topic: 'Photoelectric Effect', jeeFreq: 21 },
            { id: 'ph-27-semiconductor', num: 27, name: 'Semiconductors & Electronics', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '~5%', topic: 'Logic Gates (OR, AND, NOT, NAND, NOR)', jeeFreq: 20 },
        ],
        other: [
            { id: 'ph-02-kinematics', num: 2, name: 'Kinematics (Motion in 1D & 2D)', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~4%', topic: 'Projectile Motion', jeeFreq: 16 },
            { id: 'ph-03-nlm', num: 3, name: 'Laws of Motion & Friction', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~4%', topic: 'Newton\'s Laws, Friction', jeeFreq: 0 },
            { id: 'ph-05-circular', num: 5, name: 'Circular Motion', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~3%', topic: 'Uniform Circular Motion', jeeFreq: 0 },
            { id: 'ph-06-com', num: 6, name: 'Centre of Mass & Collisions', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~3%', topic: 'Centre of Mass, Collisions', jeeFreq: 0 },
            { id: 'ph-09-properties', num: 9, name: 'Properties of Matter (Elasticity, Fluids, Surface Tension)', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~3%', topic: 'Elasticity, Fluid Properties', jeeFreq: 0 },
            { id: 'ph-10-shm', num: 10, name: 'Simple Harmonic Motion (SHM)', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~4%', topic: 'SHM Equations', jeeFreq: 0 },
            { id: 'ph-11-waves', num: 11, name: 'Waves & Sound', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~3%', topic: 'Standing Waves, Beats', jeeFreq: 0 },
            { id: 'ph-12-thermal', num: 12, name: 'Thermal Expansion & Calorimetry', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~2%', topic: 'Linear & Volume Expansion', jeeFreq: 0 },
            { id: 'ph-14-ktg', num: 14, name: 'Kinetic Theory of Gases', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~3%', topic: 'Degrees of Freedom, Equipartition', jeeFreq: 28 },
            { id: 'ph-16-capacitance', num: 16, name: 'Capacitance', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~3%', topic: 'Capacitor Combinations', jeeFreq: 0 },
            { id: 'ph-18-magnetic', num: 18, name: 'Magnetic Effects of Current', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~7%', topic: 'Biot-Savart Law, Charge in B Field', jeeFreq: 31 },
            { id: 'ph-19-magnetism', num: 19, name: 'Magnetism & Matter', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~2%', topic: 'Magnetic Properties of Matter', jeeFreq: 0 },
            { id: 'ph-20-emi', num: 20, name: 'Electromagnetic Induction (EMI)', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~5%', topic: 'Faraday\'s Law, Lenz\'s Law', jeeFreq: 0 },
            { id: 'ph-21-ac', num: 21, name: 'Alternating Current (AC)', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '~3%', topic: 'AC Circuits, LCR', jeeFreq: 0 },
            { id: 'ph-28-comm', num: 28, name: 'Communication Systems', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~1%', topic: 'Modulation, Bandwidth', jeeFreq: 0 },
            { id: 'ph-29-experimental', num: 29, name: 'Experimental Physics / Error Analysis', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~2%', topic: 'Vernier, Screw Gauge', jeeFreq: 0 },
            { id: 'ph-30-fluid', num: 30, name: 'Fluid Mechanics (Extended Problems)', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~3%', topic: 'Bernoulli, Viscosity', jeeFreq: 0 },
        ]
    },
    chemistry: {
        physical: [
            { id: 'ch-01-basic', num: 1, name: 'Some Basic Concepts (Mole Concept)', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'P.C.', topic: 'Stoichiometry, Concentration Terms', jeeFreq: 43 },
            { id: 'ch-02-atomic', num: 2, name: 'Atomic Structure', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'P.C.', topic: 'Bohr Model, Quantum Numbers', jeeFreq: 0 },
            { id: 'ch-05-states', num: 5, name: 'States of Matter (Gaseous & Liquid)', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: 'P.C.', topic: 'Gas Laws, Ideal Gas Equation', jeeFreq: 0 },
            { id: 'ch-06-thermo', num: 6, name: 'Thermodynamics (Chemical)', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: 'P.C.', topic: 'First Law, Thermochemistry', jeeFreq: 33 },
            { id: 'ch-07-equilibrium', num: 7, name: 'Chemical & Ionic Equilibrium', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: 'P.C.', topic: 'Equilibrium Constant', jeeFreq: 16 },
            { id: 'ch-08-redox', num: 8, name: 'Redox Reactions', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: 'P.C.', topic: 'Balancing Redox Reactions', jeeFreq: 0 },
            { id: 'ch-09-solutions', num: 9, name: 'Solutions', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'P.C.', topic: 'Colligative Properties', jeeFreq: 27 },
            { id: 'ch-10-electrochem', num: 10, name: 'Electrochemistry', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: 'P.C.', topic: 'Nernst Equation, Cells', jeeFreq: 0 },
            { id: 'ch-11-kinetics', num: 11, name: 'Chemical Kinetics', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'P.C.', topic: 'First Order Reaction', jeeFreq: 16 },
            { id: 'ch-12-solid', num: 12, name: 'Solid State', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: 'P.C.', topic: 'Crystal Structures, Defects', jeeFreq: 0 },
            { id: 'ch-13-surface', num: 13, name: 'Surface Chemistry', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: 'P.C.', topic: 'Adsorption, Colloids', jeeFreq: 0 },
        ],
        organic: [
            { id: 'ch-20-goc', num: 20, name: 'Basics of Organic Chemistry (GOC)', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: 'O.C.', topic: 'IUPAC, Electrophilic Aromatic Substitution', jeeFreq: 32 },
            { id: 'ch-21-isomerism', num: 21, name: 'Isomerism', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'O.C.', topic: 'Structural & Stereo Isomerism', jeeFreq: 0 },
            { id: 'ch-22-hydrocarbons', num: 22, name: 'Hydrocarbons', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'O.C.', topic: 'Alkanes, Alkenes, Alkynes', jeeFreq: 0 },
            { id: 'ch-23-haloalkanes', num: 23, name: 'Haloalkanes & Haloarenes', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'O.C.', topic: 'Nucleophilic Substitution Reactions', jeeFreq: 18 },
            { id: 'ch-24-alcohols', num: 24, name: 'Alcohols, Phenols & Ethers', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'O.C.', topic: 'Reactions of Alcohols & Phenols', jeeFreq: 0 },
            { id: 'ch-25-aldehydes', num: 25, name: 'Aldehydes, Ketones & Carboxylic Acids', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: 'O.C.', topic: 'Chemical Reactions of Carbonyls', jeeFreq: 19 },
            { id: 'ch-26-amines', num: 26, name: 'Amines & Nitrogen Compounds', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'O.C.', topic: 'Types of Compounds, Reactions', jeeFreq: 17 },
            { id: 'ch-27-biomolecules', num: 27, name: 'Biomolecules', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: 'O.C.', topic: 'Carbohydrates, Amino Acids', jeeFreq: 0 },
            { id: 'ch-28-polymers', num: 28, name: 'Polymers', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: 'O.C.', topic: 'Types of Polymerization', jeeFreq: 0 },
            { id: 'ch-29-everyday', num: 29, name: 'Chemistry in Everyday Life', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: 'O.C.', topic: 'Drugs, Cleansing Agents', jeeFreq: 0 },
        ],
        inorganic: [
            { id: 'ch-03-periodic', num: 3, name: 'Periodic Table & Periodicity', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: 'I.O.C.', topic: 'Periodic Properties', jeeFreq: 33 },
            { id: 'ch-04-bonding', num: 4, name: 'Chemical Bonding & Molecular Structure', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: 'I.O.C.', topic: 'VSEPR, Hybridization, MOT', jeeFreq: 0 },
            { id: 'ch-14-metallurgy', num: 14, name: 'General Principles of Metallurgy', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: 'I.O.C.', topic: 'Extraction Methods', jeeFreq: 0 },
            { id: 'ch-15-sblock', num: 15, name: 'Hydrogen & s-Block Elements', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: 'I.O.C.', topic: 'Alkali & Alkaline Earth Metals', jeeFreq: 0 },
            { id: 'ch-16-pblock', num: 16, name: 'p-Block Elements (Group 13-18)', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: 'I.O.C.', topic: 'Group-wise Properties & Compounds', jeeFreq: 0 },
            { id: 'ch-17-dfblock', num: 17, name: 'd & f-Block Elements', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: 'I.O.C.', topic: 'Properties of Elements & Compounds', jeeFreq: 48 },
            { id: 'ch-18-coordination', num: 18, name: 'Coordination Compounds', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: 'I.O.C.', topic: 'Bonding in Complexes, Isomerism', jeeFreq: 32 },
            { id: 'ch-19-salt', num: 19, name: 'Salt Analysis / Qualitative Inorganic', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: 'I.O.C.', topic: 'Test of Cations', jeeFreq: 16 },
            { id: 'ch-30-environmental', num: 30, name: 'Environmental & Practical Chemistry', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: 'I.O.C.', topic: 'Pollution, Green Chemistry', jeeFreq: 0 },
        ]
    },
    mathematics: {
        high: [
            { id: 'ma-24-3d', num: 24, name: '3D Geometry', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '65', topic: 'Point on Straight Line + Shortest Distance', jeeFreq: 65 },
            { id: 'ma-23-vectors', num: 23, name: 'Vectors', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '53', topic: 'Products of Vectors', jeeFreq: 53 },
            { id: 'ma-19-area', num: 19, name: 'Area Under Curves', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '41', topic: 'Bounded between Simple Curves', jeeFreq: 41 },
            { id: 'ma-20-diffeq', num: 20, name: 'Differential Equations', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '36', topic: 'Linear DE + Variables Separable', jeeFreq: 36 },
            { id: 'ma-18-definite', num: 18, name: 'Definite Integration', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '28', topic: 'Properties of Definite Integration', jeeFreq: 28 },
            { id: 'ma-16-appderiv', num: 16, name: 'Application of Derivatives', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: '~4%', topic: 'Maxima & Minima, Tangent/Normal', jeeFreq: 0 },
            { id: 'ma-17-indefinite', num: 17, name: 'Indefinite Integration', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: '~4%', topic: 'Methods of Integration', jeeFreq: 0 },
            { id: 'ma-25-probability', num: 25, name: 'Probability', length: 'Heavy', days: 4, lectureType: 'Detailed', weight: '17', topic: 'Classical Definition of Probability', jeeFreq: 17 },
        ],
        medium: [
            { id: 'ma-09-binomial', num: 9, name: 'Binomial Theorem', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '26', topic: 'General Term', jeeFreq: 26 },
            { id: 'ma-14-limits', num: 14, name: 'Limits & Continuity', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '26', topic: 'Methods of Finding Limits', jeeFreq: 26 },
            { id: 'ma-21-matrices', num: 21, name: 'Matrices', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '24', topic: 'System of Linear Equations', jeeFreq: 24 },
            { id: 'ma-01-sets', num: 1, name: 'Sets, Relations & Functions', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '23', topic: 'Types of Relations', jeeFreq: 23 },
            { id: 'ma-13-ellipse', num: 13, name: 'Ellipse & Hyperbola', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '20', topic: 'Standard Form Equations', jeeFreq: 20 },
            { id: 'ma-26-stats', num: 26, name: 'Statistics', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '18', topic: 'Standard Deviation & Variance', jeeFreq: 18 },
            { id: 'ma-03-sequence', num: 3, name: 'Sequences & Series', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '17', topic: 'Sum of n Terms of AP', jeeFreq: 17 },
            { id: 'ma-15-diff', num: 15, name: 'Differentiation (Methods)', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~3%', topic: 'Chain Rule, Implicit Differentiation', jeeFreq: 0 },
            { id: 'ma-22-determinants', num: 22, name: 'Determinants', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~3%', topic: 'Properties, Cramer\'s Rule', jeeFreq: 0 },
        ],
        other: [
            { id: 'ma-02-quadratic', num: 2, name: 'Quadratic Equations & Inequalities', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~3%', topic: 'Nature of Roots, Inequalities', jeeFreq: 0 },
            { id: 'ma-04-trigratio', num: 4, name: 'Trigonometric Ratios & Identities', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '~3%', topic: 'Trigonometric Identities', jeeFreq: 0 },
            { id: 'ma-05-trigeq', num: 5, name: 'Trigonometric Equations', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~2%', topic: 'General Solutions', jeeFreq: 0 },
            { id: 'ma-06-invtrig', num: 6, name: 'Inverse Trigonometric Functions', length: 'Light', days: 1.5, lectureType: 'One-shot', weight: '~2%', topic: 'Domain, Range, Properties', jeeFreq: 0 },
            { id: 'ma-07-complex', num: 7, name: 'Complex Numbers', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~3%', topic: 'Modulus, Argument, Geometry', jeeFreq: 0 },
            { id: 'ma-08-pnc', num: 8, name: 'Permutations & Combinations', length: 'Medium', days: 2.5, lectureType: 'Detailed', weight: '~3%', topic: 'Counting Principles', jeeFreq: 0 },
            { id: 'ma-10-lines', num: 10, name: 'Straight Lines', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '~2%', topic: 'Distance, Family of Lines', jeeFreq: 0 },
            { id: 'ma-11-circles', num: 11, name: 'Circles', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '~2%', topic: 'Tangent, Radical Axis', jeeFreq: 0 },
            { id: 'ma-12-parabola', num: 12, name: 'Parabola', length: 'Medium', days: 2.5, lectureType: 'One-shot', weight: '~2%', topic: 'Standard Forms, Focal Chord', jeeFreq: 0 },
        ]
    }
};

// ===== STUDY METRICS =====
const STUDY_METRICS = {
    totalChapters: 86,
    chaptersPerMonth: 14,
    chaptersPerWeek: 3,
    avgDaysPerChapter: 2.2,
    totalQuestions: 8800,
    questionsPerDay: 46,
    revisionPerWeek: '10 hrs',
    physics: { total: 30, detailed: 18, oneShot: 12, totalDays: 77 },
    chemistry: { total: 30, detailed: 17, oneShot: 13, totalDays: 76 },
    mathematics: { total: 26, detailed: 14, oneShot: 12, totalDays: 65.5 },
};

// ===== JEE HIGH-YIELD TOPICS (Top 15 per subject — 2024 & 2025 data) =====
const JEE_HIGH_YIELD_TOPICS = {
    physics: [
        { topic: 'Units, Dimensions & Measurement', subtopic: 'Dimensional analysis, Errors', freq: 46 },
        { topic: 'Modern Physics', subtopic: 'Bohr model, Nucleus', freq: 34 },
        { topic: 'Magnetic Effects of Current', subtopic: 'Biot-Savart, Charge in B field', freq: 31 },
        { topic: 'KTG & Thermodynamics', subtopic: 'Degrees of freedom, Equipartition', freq: 28 },
        { topic: 'Current Electricity', subtopic: 'Ammeter, Voltmeter, Resistors', freq: 26 },
        { topic: 'Gravitation', subtopic: 'Satellite orbits, g variation', freq: 25 },
        { topic: 'Photoelectric Effect', subtopic: 'Photoelectric effect', freq: 21 },
        { topic: 'Semiconductors', subtopic: 'Logic gates (OR, AND, NOT, NAND, NOR)', freq: 20 },
        { topic: 'KTG & Thermodynamics', subtopic: 'Adiabatic, Polytropic Process', freq: 20 },
        { topic: 'Ray Optics', subtopic: 'Thin lens, Lens maker formula', freq: 20 },
        { topic: 'Wave Optics', subtopic: 'Young\'s double-slit experiment', freq: 17 },
        { topic: 'Moving Charges', subtopic: 'Biot-Savart law application', freq: 17 },
        { topic: 'Kinematics', subtopic: 'Projectile motion', freq: 16 },
        { topic: 'EM Waves', subtopic: 'Equation, speed, frequency', freq: 15 },
        { topic: 'Rotational Motion', subtopic: 'Rolling motion', freq: 14 },
    ],
    chemistry: [
        { topic: 'd & f-Block Elements', subtopic: 'Properties of elements + compounds', freq: 48 },
        { topic: 'Some Basic Concepts', subtopic: 'Stoichiometry, Concentration terms', freq: 43 },
        { topic: 'Periodic Table', subtopic: 'Periodic properties', freq: 33 },
        { topic: 'Thermodynamics', subtopic: 'First law, Thermochemistry', freq: 33 },
        { topic: 'Coordination Compounds', subtopic: 'Bonding in complexes', freq: 32 },
        { topic: 'Solutions', subtopic: 'Colligative properties', freq: 27 },
        { topic: 'Aldehydes & Ketones', subtopic: 'Chemical reactions of carbonyls', freq: 19 },
        { topic: 'Haloalkanes', subtopic: 'Nucleophilic substitution', freq: 18 },
        { topic: 'Amines', subtopic: 'Types of compounds', freq: 17 },
        { topic: 'Qualitative Analysis', subtopic: 'Test of cations', freq: 16 },
        { topic: 'Haloalkanes', subtopic: 'Reactions', freq: 16 },
        { topic: 'Chemical Kinetics', subtopic: 'First order reaction', freq: 16 },
        { topic: 'GOC', subtopic: 'Electrophilic aromatic substitution', freq: 16 },
        { topic: 'GOC', subtopic: 'IUPAC Nomenclature', freq: 16 },
        { topic: 'Chemical Equilibrium', subtopic: 'Equilibrium constant', freq: 16 },
    ],
    mathematics: [
        { topic: '3D Geometry', subtopic: 'Point on Straight Line + Shortest Distance', freq: 65 },
        { topic: 'Vectors', subtopic: 'Products of Vectors', freq: 53 },
        { topic: 'Area Under Curves', subtopic: 'Bounded between Simple Curves', freq: 41 },
        { topic: 'Differential Equations', subtopic: 'Linear DE', freq: 36 },
        { topic: 'Definite Integration', subtopic: 'Properties of Definite Integration', freq: 28 },
        { topic: 'Binomial Theorem', subtopic: 'General Term', freq: 26 },
        { topic: 'Limits', subtopic: 'Methods of finding Limits', freq: 26 },
        { topic: 'Matrices', subtopic: 'System of Linear Equations', freq: 24 },
        { topic: 'Sets, Relations', subtopic: 'Types of Relations', freq: 23 },
        { topic: 'Conic Sections', subtopic: 'Equation of Hyperbola', freq: 20 },
        { topic: 'Statistics', subtopic: 'Standard Deviation & Variance', freq: 18 },
        { topic: 'Differential Equations', subtopic: 'Variables Separable Method', freq: 18 },
        { topic: 'Conic Sections', subtopic: 'Equation of Ellipse', freq: 17 },
        { topic: 'Probability', subtopic: 'Classical Definition', freq: 17 },
        { topic: 'Sequence & Series', subtopic: 'Sum of n Terms of AP', freq: 17 },
    ]
};

// ===== MATH PRIORITY ORDER (User's strategy) =====
const MATH_PRIORITY_ORDER = [
    'Sequence & Series',
    'Determinants & Matrices',
    'Binomial Theorem',
    'Vectors & 3D',
    'Coordinate Geometry',
    'Quadratic & Complex Numbers',
    'P&C, Probability & Statistics',
    'Limits, Continuity & Differentiability',
    'Differential Equations',
    'Definite Integration',
    'Area Under Curves',
    'Trigonometry',
];

const STATUS_CYCLE = ['not-started', 'in-progress', 'revision', 'completed'];
const STATUS_LABELS = {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    'revision': 'Revision',
    'completed': 'Completed ✓'
};
const STATUS_ICONS = {
    'not-started': '○',
    'in-progress': '◐',
    'revision': '↻',
    'completed': '✓'
};

const MOTIVATIONAL_QUOTES = [
    '"Success is the sum of small efforts, repeated day in and day out." — Robert Collier',
    '"The only way to do great work is to love what you do." — Steve Jobs',
    '"Don\'t watch the clock; do what it does. Keep going." — Sam Levenson',
    '"Believe you can and you\'re halfway there." — Theodore Roosevelt',
    '"It does not matter how slowly you go as long as you do not stop." — Confucius',
    '"The future belongs to those who believe in the beauty of their dreams." — Eleanor Roosevelt',
    '"Hard work beats talent when talent doesn\'t work hard." — Tim Notke',
    '"Push yourself, because no one else is going to do it for you."',
    '"Dream big. Start small. Act now."',
    '"IIT is not the destination, it\'s the journey that shapes you."',
    '"Every expert was once a beginner."',
    '"Physics is not difficult, lack of practice is."',
    '"Chemistry is the study of matter. But I prefer to see it as the study of change."',
    '"Mathematics is not about numbers, equations, computations, it is about understanding." — William Paul Thurston',
];

// ===== STATE MANAGEMENT =====
class AppState {
    constructor() {
        this.chapterStatus = {};
        this.focusItems = [];
        this.activities = [];
        this.schedule = {};
        this.notes = '';
        this.formulas = [];
        this.streak = { count: 0, lastDate: null, calendar: {} };
        this.pomodoroSessions = 0;
        this.totalFocusMinutes = 0;
        this.studyLog = [];
        this.load();
    }

    load() {
        try {
            const user = localStorage.getItem('jee-tracker-user') || 'default';
            let saved = localStorage.getItem(`jee-tracker-state-${user}`);
            if (!saved) {
                // Fallback to legacy key
                saved = localStorage.getItem('jee-tracker-state');
            }
            if (saved) {
                const data = JSON.parse(saved);
                Object.assign(this, data);
            }
        } catch (e) {
            console.error('Failed to load state:', e);
        }
    }

    save() {
        try {
            const data = JSON.stringify({
                chapterStatus: this.chapterStatus,
                focusItems: this.focusItems,
                activities: this.activities,
                schedule: this.schedule,
                notes: this.notes,
                formulas: this.formulas,
                streak: this.streak,
                pomodoroSessions: this.pomodoroSessions,
                totalFocusMinutes: this.totalFocusMinutes,
                studyLog: this.studyLog,
            });
            const user = localStorage.getItem('jee-tracker-user') || 'default';
            localStorage.setItem(`jee-tracker-state-${user}`, data);
            // Also save a backup timestamp
            localStorage.setItem(`jee-tracker-last-save-${user}`, new Date().toISOString());
            if (typeof showSaveIndicator === 'function') {
                showSaveIndicator();
            }
        } catch (e) {
            console.error('Failed to save state:', e);
        }
    }

    getChapterStatus(id) {
        return this.chapterStatus[id] || 'not-started';
    }

    setChapterStatus(id, status) {
        this.chapterStatus[id] = status;
        this.save();
    }

    addActivity(text, subject) {
        this.activities.unshift({
            text,
            subject,
            time: new Date().toISOString()
        });
        if (this.activities.length > 50) this.activities.pop();
        this.save();
    }

    updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        if (this.streak.lastDate === today) return;

        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (this.streak.lastDate === yesterday) {
            this.streak.count++;
        } else if (this.streak.lastDate !== today) {
            this.streak.count = 1;
        }
        this.streak.lastDate = today;
        this.streak.calendar[today] = true;
        this.save();
    }

    reset() {
        const user = localStorage.getItem('jee-tracker-user') || 'default';
        localStorage.removeItem(`jee-tracker-state-${user}`);
        localStorage.removeItem(`jee-tracker-last-save-${user}`);
        this.chapterStatus = {};
        this.focusItems = [];
        this.activities = [];
        this.schedule = {};
        this.notes = '';
        this.formulas = [];
        this.streak = { count: 0, lastDate: null, calendar: {} };
        this.pomodoroSessions = 0;
        this.totalFocusMinutes = 0;
        this.studyLog = [];
    }

    exportData() {
        return JSON.stringify({
            chapterStatus: this.chapterStatus,
            focusItems: this.focusItems,
            activities: this.activities,
            schedule: this.schedule,
            notes: this.notes,
            formulas: this.formulas,
            streak: this.streak,
            pomodoroSessions: this.pomodoroSessions,
            totalFocusMinutes: this.totalFocusMinutes,
            studyLog: this.studyLog,
            exportDate: new Date().toISOString(),
            version: '2.0'
        }, null, 2);
    }

    importData(jsonStr) {
        try {
            const data = JSON.parse(jsonStr);
            if (!data.chapterStatus) throw new Error('Invalid data format');
            Object.assign(this, data);
            this.save();
            return true;
        } catch (e) {
            console.error('Import failed:', e);
            return false;
        }
    }
}

// ===== APP INITIALIZATION =====
const state = new AppState();

document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initNavigation();
    initCountdown();
    renderAllChapters();
    renderDashboard();
    renderStudyMetrics();
    renderHighYieldTopics('physics');
    renderStrategyCards();
    initPomodoro();
    initSchedule();
    initNotes();
    initFormulas();
    initFocusItems();
    initAnalytics();
    initStreakCalendar();
    initAchievements();
    initQuote();
    initResetButton();
    initHighYieldTabs();
    initStudyLog();
    initExportImport();
    initChapterSearch();
    updateAllStats();

    // Auto-save on page unload to prevent data loss
    window.addEventListener('beforeunload', () => {
        state.save();
    });

    // Periodic auto-save every 30 seconds
    setInterval(() => {
        state.save();
    }, 30000);
});

// ===== AUTHENTICATION =====
function initAuth() {
    const authOverlay = document.getElementById('authOverlay');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authTabs = document.querySelectorAll('.auth-tab');
    const userProfile = document.getElementById('userProfile');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    // Check if logged in
    const currentUser = localStorage.getItem('jee-tracker-user');
    
    if (currentUser) {
        // User is logged in
        authOverlay.classList.add('hidden');
        userProfile.style.display = 'flex';
        userNameDisplay.textContent = currentUser;
    } else {
        // Show login
        authOverlay.classList.remove('hidden');
    }

    // Tabs toggle
    if(authTabs.length > 0) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                authTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
                if (tab.dataset.tab === 'login') {
                    loginForm.classList.add('active');
                    signupForm.classList.remove('active');
                } else {
                    signupForm.classList.add('active');
                    loginForm.classList.remove('active');
                }
            });
        });
    }

    // Login submit
    if(loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const name = email.split('@')[0];
            loginUser(name);
        });
    }

    // Signup submit
    if(signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            loginUser(name);
        });
    }

    // Logout
    if(logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('jee-tracker-user');
            window.location.reload();
        });
    }

    function loginUser(name) {
        localStorage.setItem('jee-tracker-user', name);
        userNameDisplay.textContent = name;
        authOverlay.style.opacity = '0';
        setTimeout(() => {
            authOverlay.classList.add('hidden');
            authOverlay.style.opacity = '1';
            userProfile.style.display = 'flex';
            showToast(`Welcome back, ${name}!`, 'success');
        }, 400);
    }
}

// ===== NAVIGATION =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            navigateTo(section);
            sidebar.classList.remove('open');
        });
    });

    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Close sidebar on outside click
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !mobileBtn.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}

function navigateTo(section) {
    // Update nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`[data-section="${section}"]`);
    if (activeLink) activeLink.classList.add('active');

    // Update sections
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const activeSection = document.getElementById(`section-${section}`);
    if (activeSection) activeSection.classList.add('active');

    // Update title
    const titles = {
        dashboard: 'Dashboard',
        physics: 'Physics',
        chemistry: 'Chemistry',
        mathematics: 'Mathematics',
        planner: 'Study Planner',
        analytics: 'Analytics',
        resources: 'Resources'
    };
    document.getElementById('pageTitle').textContent = titles[section] || section;

    // Refresh analytics when opening
    if (section === 'analytics') {
        updateAnalytics();
        renderWeeklyHoursChart();
    }
}

// ===== COUNTDOWN TIMER =====
function initCountdown() {
    // JEE Main 2027 Session 1 - typically late January 2027
    const jeeDate = new Date('2027-01-23T09:00:00+05:30');

    function updateCountdown() {
        const now = new Date();
        const diff = jeeDate - now;

        if (diff <= 0) {
            document.getElementById('countdown-days').textContent = '000';
            document.getElementById('countdown-hours').textContent = '00';
            document.getElementById('countdown-minutes').textContent = '00';
            document.getElementById('countdown-seconds').textContent = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdown-days').textContent = String(days).padStart(3, '0');
        document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== STUDY METRICS RENDERING =====
function renderStudyMetrics() {
    const container = document.getElementById('studyMetricsContent');
    if (!container) return;

    const allChapters = [...getAllChapters('physics'), ...getAllChapters('chemistry'), ...getAllChapters('mathematics')];
    const completed = allChapters.filter(ch => state.getChapterStatus(ch.id) === 'completed').length;
    const remaining = allChapters.length - completed;

    const totalDaysAll = allChapters.reduce((sum, ch) => sum + ch.days, 0);
    const remainingDays = allChapters.filter(ch => state.getChapterStatus(ch.id) !== 'completed')
        .reduce((sum, ch) => sum + ch.days, 0);

    container.innerHTML = `
        <div class="metrics-main-grid">
            <div class="metric-big">
                <span class="metric-big-value">${remaining}</span>
                <span class="metric-big-label">Chapters Left</span>
                <span class="metric-big-sub">of ${STUDY_METRICS.totalChapters} total</span>
            </div>
            <div class="metric-big">
                <span class="metric-big-value">${Math.round(remainingDays)}</span>
                <span class="metric-big-label">Study Days Left</span>
                <span class="metric-big-sub">of ${totalDaysAll} total</span>
            </div>
            <div class="metric-big">
                <span class="metric-big-value">~${STUDY_METRICS.questionsPerDay}</span>
                <span class="metric-big-label">Questions / Day</span>
                <span class="metric-big-sub">${STUDY_METRICS.totalQuestions.toLocaleString()} total target</span>
            </div>
            <div class="metric-big">
                <span class="metric-big-value">${STUDY_METRICS.revisionPerWeek}</span>
                <span class="metric-big-label">Revision / Week</span>
                <span class="metric-big-sub">~${STUDY_METRICS.chaptersPerWeek} chapters/week</span>
            </div>
        </div>
        <div class="metrics-subjects-grid">
            ${renderSubjectMetricBar('Physics', 'physics', STUDY_METRICS.physics, '⚡')}
            ${renderSubjectMetricBar('Chemistry', 'chemistry', STUDY_METRICS.chemistry, '🧪')}
            ${renderSubjectMetricBar('Mathematics', 'mathematics', STUDY_METRICS.mathematics, '📐')}
        </div>
    `;
}

function renderSubjectMetricBar(label, subjectKey, data, icon) {
    const chapters = getAllChapters(subjectKey);
    const completed = chapters.filter(ch => state.getChapterStatus(ch.id) === 'completed').length;
    const percent = Math.round((completed / data.total) * 100);

    return `
        <div class="subject-metric-row">
            <div class="subject-metric-header">
                <span class="subject-metric-icon">${icon}</span>
                <span class="subject-metric-name">${label}</span>
                <span class="subject-metric-progress">${completed}/${data.total}</span>
            </div>
            <div class="subject-metric-bar">
                <div class="subject-metric-bar-fill subject-fill-${subjectKey}" style="width:${percent}%"></div>
            </div>
            <div class="subject-metric-details">
                <span class="smd-tag detailed">🎓 ${data.detailed} Detailed</span>
                <span class="smd-tag oneshot">⚡ ${data.oneShot} One-shot</span>
                <span class="smd-tag days">📅 ${data.totalDays} days</span>
            </div>
        </div>
    `;
}

// ===== HIGH-YIELD TOPICS RENDERING =====
function renderHighYieldTopics(subject) {
    const container = document.getElementById('highYieldContent');
    if (!container) return;

    const topics = JEE_HIGH_YIELD_TOPICS[subject];
    const maxFreq = topics[0].freq;

    container.innerHTML = topics.map((t, i) => {
        const barWidth = Math.round((t.freq / maxFreq) * 100);
        const rank = i + 1;
        return `
            <div class="hyt-row">
                <span class="hyt-rank">#${rank}</span>
                <div class="hyt-info">
                    <span class="hyt-topic">${t.topic}</span>
                    <span class="hyt-subtopic">${t.subtopic}</span>
                </div>
                <div class="hyt-bar-container">
                    <div class="hyt-bar hyt-bar-${subject}" style="width:${barWidth}%"></div>
                </div>
                <span class="hyt-freq">${t.freq}</span>
            </div>
        `;
    }).join('');
}

function initHighYieldTabs() {
    const tabs = document.querySelectorAll('.hyt-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderHighYieldTopics(tab.dataset.subject);
        });
    });
}

// ===== STRATEGY CARDS RENDERING =====
function renderStrategyCards() {
    const container = document.getElementById('strategyContent');
    if (!container) return;

    container.innerHTML = `
        <div class="strategy-card strategy-physics">
            <div class="strategy-card-header">
                <h4>⚡ Physics Strategy</h4>
            </div>
            <div class="strategy-section">
                <div class="strategy-label">🔥 Heavy Lifters <span class="strategy-badge heavy">~45%</span></div>
                <div class="strategy-list">
                    <span>Thermodynamics</span><span>Optics</span><span>Modern Physics</span>
                    <span>Electrostatics</span><span>Current Electricity</span><span>Magnetic Effects</span>
                </div>
            </div>
            <div class="strategy-section">
                <div class="strategy-label">💡 Smart Lifters <span class="strategy-badge smart">~26%</span></div>
                <div class="strategy-list">
                    <span>Units & Dimensions</span><span>Wave Optics & EM Waves</span>
                    <span>Semiconductor</span><span>Work Power Energy</span><span>Gravitation</span>
                </div>
            </div>
        </div>
        <div class="strategy-card strategy-chemistry">
            <div class="strategy-card-header">
                <h4>🧪 Chemistry Strategy</h4>
            </div>
            <div class="strategy-section">
                <div class="strategy-label">⚗️ Physical Chem (P.C.)</div>
                <div class="strategy-list">
                    <span>Basic Concepts</span><span>Thermodynamics</span><span>Solutions</span>
                    <span>Equilibrium</span><span>Electrochemistry</span><span>Kinetics</span>
                </div>
            </div>
            <div class="strategy-section">
                <div class="strategy-label">🧬 Organic Chem (O.C.)</div>
                <div class="strategy-list">
                    <span>GOC</span><span>Aldehydes & Ketones</span><span>Haloalkanes</span>
                    <span>Alcohols & Phenols</span><span>Amines</span>
                </div>
            </div>
            <div class="strategy-section">
                <div class="strategy-label">💎 Inorganic Chem (I.O.C.)</div>
                <div class="strategy-list">
                    <span>Coordination Compounds</span><span>d & f-Block</span><span>Periodicity</span>
                </div>
            </div>
        </div>
        <div class="strategy-card strategy-math">
            <div class="strategy-card-header">
                <h4>📐 Math Priority Order</h4>
            </div>
            <ol class="strategy-ordered-list">
                ${MATH_PRIORITY_ORDER.map(item => `<li>${item}</li>`).join('')}
            </ol>
        </div>
    `;
}

// ===== CHAPTER RENDERING =====
function renderAllChapters() {
    // Physics
    renderChapterList('physics-heavy-lifters', CHAPTERS_DATA.physics.heavyLifters, 'physics');
    renderChapterList('physics-smart-lifters', CHAPTERS_DATA.physics.smartLifters, 'physics');
    renderChapterList('physics-other', CHAPTERS_DATA.physics.other, 'physics');

    // Chemistry
    renderChapterList('chemistry-physical', CHAPTERS_DATA.chemistry.physical, 'chemistry');
    renderChapterList('chemistry-organic', CHAPTERS_DATA.chemistry.organic, 'chemistry');
    renderChapterList('chemistry-inorganic', CHAPTERS_DATA.chemistry.inorganic, 'chemistry');

    // Mathematics
    renderChapterList('math-high', CHAPTERS_DATA.mathematics.high, 'mathematics');
    renderChapterList('math-medium', CHAPTERS_DATA.mathematics.medium, 'mathematics');
    renderChapterList('math-other', CHAPTERS_DATA.mathematics.other, 'mathematics');
}

function renderChapterList(containerId, chapters, subject) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = chapters.map(ch => {
        const status = state.getChapterStatus(ch.id);
        const statusClass = `status-${status}`;
        const cardClass = status === 'completed' ? 'completed' : status === 'in-progress' ? 'in-progress' : '';

        // Length pill
        const lengthClass = ch.length.toLowerCase();
        const lengthPill = `<span class="length-pill length-${lengthClass}">${ch.length}</span>`;

        // Lecture type badge
        const lectureClass = ch.lectureType === 'Detailed' ? 'badge-detailed' : 'badge-oneshot';
        const lectureIcon = ch.lectureType === 'Detailed' ? '🎓' : '⚡';
        const lectureBadge = `<span class="lecture-badge ${lectureClass}">${lectureIcon} ${ch.lectureType}</span>`;

        // Days display
        const daysDisplay = `<span class="days-display">📅 ${ch.days}d</span>`;

        // JEE frequency (if available)
        const freqDisplay = ch.jeeFreq > 0
            ? `<span class="freq-display">🎯 ${ch.jeeFreq}</span>`
            : '';

        // Weight label
        const weightLabel = subject === 'mathematics' && ch.jeeFreq > 0
            ? `Freq: ${ch.weight}`
            : ch.weight;

        // Topic info
        const topicHtml = ch.topic
            ? `<span class="chapter-meta-topic">${ch.topic}</span>`
            : '';

        return `
            <div class="chapter-card ${cardClass}" data-id="${ch.id}" data-subject="${subject}">
                <input type="checkbox" class="chapter-checkbox" 
                    ${status === 'completed' ? 'checked' : ''} 
                    data-id="${ch.id}" data-subject="${subject}">
                <div class="chapter-info">
                    <div class="chapter-name-row">
                        <span class="chapter-num">${ch.num}</span>
                        <span class="chapter-name">${ch.name}</span>
                    </div>
                    <div class="chapter-meta">
                        ${lengthPill}
                        ${lectureBadge}
                        ${daysDisplay}
                        ${freqDisplay}
                    </div>
                    <div class="chapter-meta-secondary">
                        <span class="chapter-weight">${weightLabel}</span>
                        ${topicHtml}
                    </div>
                </div>
                <button class="chapter-status-btn ${statusClass}" 
                    data-id="${ch.id}" data-subject="${subject}">
                    ${STATUS_LABELS[status]}
                </button>
            </div>
        `;
    }).join('');

    // Event listeners
    container.querySelectorAll('.chapter-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const id = e.target.dataset.id;
            const subj = e.target.dataset.subject;
            const newStatus = e.target.checked ? 'completed' : 'not-started';
            state.setChapterStatus(id, newStatus);
            state.addActivity(`Marked "${getChapterName(id)}" as ${STATUS_LABELS[newStatus]}`, subj);
            state.updateStreak();
            renderAllChapters();
            updateAllStats();
            renderStudyMetrics();
            showToast(`${getChapterName(id)} — ${STATUS_LABELS[newStatus]}`, 'success');
        });
    });

    container.querySelectorAll('.chapter-status-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id;
            const subj = e.target.dataset.subject;
            const currentStatus = state.getChapterStatus(id);
            const currentIdx = STATUS_CYCLE.indexOf(currentStatus);
            const newStatus = STATUS_CYCLE[(currentIdx + 1) % STATUS_CYCLE.length];
            state.setChapterStatus(id, newStatus);
            state.addActivity(`Changed "${getChapterName(id)}" to ${STATUS_LABELS[newStatus]}`, subj);
            state.updateStreak();
            renderAllChapters();
            updateAllStats();
            renderStudyMetrics();
            showToast(`${getChapterName(id)} → ${STATUS_LABELS[newStatus]}`, 'info');
        });
    });
}

function getChapterName(id) {
    for (const subject of Object.values(CHAPTERS_DATA)) {
        for (const group of Object.values(subject)) {
            const ch = group.find(c => c.id === id);
            if (ch) return ch.name;
        }
    }
    return id;
}

function getAllChapters(subject) {
    const data = CHAPTERS_DATA[subject];
    let all = [];
    for (const group of Object.values(data)) {
        all = all.concat(group);
    }
    return all;
}

// ===== STATS & PROGRESS =====
function updateAllStats() {
    const subjects = ['physics', 'chemistry', 'mathematics'];
    const subjectMap = { physics: 'physics', chemistry: 'chemistry', mathematics: 'math' };
    let totalChapters = 0;
    let totalCompleted = 0;

    subjects.forEach(subject => {
        const chapters = getAllChapters(subject);
        const completed = chapters.filter(ch => state.getChapterStatus(ch.id) === 'completed').length;
        const total = chapters.length;
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

        const key = subjectMap[subject];
        document.getElementById(`stat-${key}-progress`).textContent = `${percent}%`;
        document.getElementById(`bar-${key}`).style.width = `${percent}%`;

        // Update section counts
        const completedCountEl = document.getElementById(`${key}-completed-count`);
        const totalCountEl = document.getElementById(`${key}-total-count`);
        if (completedCountEl) completedCountEl.textContent = `${completed} completed`;
        if (totalCountEl) totalCountEl.textContent = `${total} total`;

        totalChapters += total;
        totalCompleted += completed;
    });

    const overallPercent = totalChapters > 0 ? Math.round((totalCompleted / totalChapters) * 100) : 0;
    document.getElementById('stat-overall-progress').textContent = `${overallPercent}%`;
    document.getElementById('bar-overall').style.width = `${overallPercent}%`;

    // Streak
    document.getElementById('streakCount').textContent = state.streak.count;

    // Update analytics if visible
    updateAnalytics();
    checkAchievements();
}

// ===== DASHBOARD =====
function renderDashboard() {
    renderActivityFeed();
    renderFocusList();
}

function renderActivityFeed() {
    const feed = document.getElementById('activityFeed');
    if (state.activities.length === 0) {
        feed.innerHTML = '<p class="empty-state">No recent activity. Start tracking chapters!</p>';
        return;
    }

    feed.innerHTML = state.activities.slice(0, 15).map(a => {
        const time = new Date(a.time);
        const timeStr = time.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        const dateStr = time.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
        return `
            <div class="activity-item">
                <div class="activity-dot ${a.subject}"></div>
                <div>
                    <div class="activity-text">${a.text}</div>
                    <div class="activity-time">${dateStr} at ${timeStr}</div>
                </div>
            </div>
        `;
    }).join('');
}

// ===== FOCUS ITEMS =====
function initFocusItems() {
    const input = document.getElementById('focusInput');
    const addBtn = document.getElementById('addFocusBtn');

    addBtn.addEventListener('click', () => addFocusItem());
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addFocusItem();
    });

    renderFocusList();
}

function addFocusItem() {
    const input = document.getElementById('focusInput');
    const text = input.value.trim();
    if (!text) return;

    state.focusItems.unshift({ id: Date.now(), text, completed: false });
    state.save();
    input.value = '';
    renderFocusList();
    showToast('Focus item added!', 'success');
}

function renderFocusList() {
    const list = document.getElementById('focusList');
    if (state.focusItems.length === 0) {
        list.innerHTML = '<p class="empty-state" style="padding:16px">Add your focus areas for today!</p>';
        return;
    }

    list.innerHTML = state.focusItems.map(item => `
        <li class="focus-item ${item.completed ? 'completed' : ''}">
            <input type="checkbox" class="focus-checkbox" ${item.completed ? 'checked' : ''} data-id="${item.id}">
            <span class="focus-text">${escapeHtml(item.text)}</span>
            <button class="focus-delete" data-id="${item.id}">✕</button>
        </li>
    `).join('');

    list.querySelectorAll('.focus-checkbox').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            const item = state.focusItems.find(i => i.id === id);
            if (item) {
                item.completed = e.target.checked;
                state.save();
                renderFocusList();
            }
        });
    });

    list.querySelectorAll('.focus-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            state.focusItems = state.focusItems.filter(i => i.id !== id);
            state.save();
            renderFocusList();
        });
    });
}

// ===== POMODORO TIMER =====
let pomodoroInterval = null;
let pomodoroTimeLeft = 25 * 60;
let pomodoroTotalTime = 25 * 60;
let pomodoroRunning = false;

function initPomodoro() {
    const startBtn = document.getElementById('pomodoroStart');
    const pauseBtn = document.getElementById('pomodoroPause');
    const resetBtn = document.getElementById('pomodoroReset');
    const presets = document.querySelectorAll('.preset-btn');

    startBtn.addEventListener('click', startPomodoro);
    pauseBtn.addEventListener('click', pausePomodoro);
    resetBtn.addEventListener('click', resetPomodoro);

    presets.forEach(btn => {
        btn.addEventListener('click', () => {
            presets.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const minutes = parseInt(btn.dataset.minutes);
            pomodoroTotalTime = minutes * 60;
            pomodoroTimeLeft = minutes * 60;
            pomodoroRunning = false;
            clearInterval(pomodoroInterval);
            updatePomodoroDisplay();
        });
    });

    // Restore counts
    document.getElementById('pomodoroCount').textContent = state.pomodoroSessions;
    const hours = Math.floor(state.totalFocusMinutes / 60);
    const mins = state.totalFocusMinutes % 60;
    document.getElementById('totalFocusTime').textContent = `${hours}h ${mins}m`;

    updatePomodoroDisplay();
}

function startPomodoro() {
    if (pomodoroRunning) return;
    pomodoroRunning = true;
    state.updateStreak();
    updateAllStats();

    pomodoroInterval = setInterval(() => {
        pomodoroTimeLeft--;
        updatePomodoroDisplay();

        if (pomodoroTimeLeft <= 0) {
            clearInterval(pomodoroInterval);
            pomodoroRunning = false;
            state.pomodoroSessions++;
            state.totalFocusMinutes += Math.round(pomodoroTotalTime / 60);
            state.save();

            document.getElementById('pomodoroCount').textContent = state.pomodoroSessions;
            const hours = Math.floor(state.totalFocusMinutes / 60);
            const mins = state.totalFocusMinutes % 60;
            document.getElementById('totalFocusTime').textContent = `${hours}h ${mins}m`;

            showToast('🍅 Pomodoro complete! Great job! Take a break.', 'success');

            // Reset
            pomodoroTimeLeft = pomodoroTotalTime;
            updatePomodoroDisplay();
        }
    }, 1000);
}

function pausePomodoro() {
    pomodoroRunning = false;
    clearInterval(pomodoroInterval);
}

function resetPomodoro() {
    pomodoroRunning = false;
    clearInterval(pomodoroInterval);
    pomodoroTimeLeft = pomodoroTotalTime;
    updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
    const minutes = Math.floor(pomodoroTimeLeft / 60);
    const seconds = pomodoroTimeLeft % 60;
    document.getElementById('pomodoroTime').textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Update ring
    const ring = document.getElementById('pomodoroRing');
    const circumference = 2 * Math.PI * 90;
    const progress = pomodoroTimeLeft / pomodoroTotalTime;
    ring.style.strokeDasharray = circumference;
    ring.style.strokeDashoffset = circumference * (1 - progress);
}

// ===== SCHEDULE =====
let currentScheduleDay = '';

function initSchedule() {
    const modal = document.getElementById('scheduleModal');
    const saveBtn = document.getElementById('modalSave');
    const cancelBtn = document.getElementById('modalCancel');

    document.querySelectorAll('.add-slot-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentScheduleDay = btn.dataset.day;
            modal.classList.add('active');
        });
    });

    saveBtn.addEventListener('click', saveScheduleSlot);
    cancelBtn.addEventListener('click', () => modal.classList.remove('active'));

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    renderSchedule();
}

function saveScheduleSlot() {
    const subject = document.getElementById('modalSubject').value;
    const topic = document.getElementById('modalTopic').value.trim();
    const time = document.getElementById('modalTime').value;

    if (!topic) {
        showToast('Please enter a topic!', 'warning');
        return;
    }

    if (!state.schedule[currentScheduleDay]) {
        state.schedule[currentScheduleDay] = [];
    }

    state.schedule[currentScheduleDay].push({
        id: Date.now(),
        subject,
        topic,
        time
    });
    state.save();

    document.getElementById('scheduleModal').classList.remove('active');
    document.getElementById('modalTopic').value = '';
    document.getElementById('modalTime').value = '';

    renderSchedule();
    showToast('Study slot added!', 'success');
}

function renderSchedule() {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    days.forEach(day => {
        const container = document.getElementById(`schedule-${day}`);
        const slots = state.schedule[day] || [];

        container.innerHTML = slots.map(slot => `
            <div class="schedule-slot ${slot.subject}">
                <span class="schedule-slot-text">${slot.time ? slot.time + ' ' : ''}${escapeHtml(slot.topic)}</span>
                <button class="schedule-slot-delete" data-day="${day}" data-id="${slot.id}">✕</button>
            </div>
        `).join('');

        container.querySelectorAll('.schedule-slot-delete').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const slotDay = e.target.dataset.day;
                const slotId = parseInt(e.target.dataset.id);
                state.schedule[slotDay] = state.schedule[slotDay].filter(s => s.id !== slotId);
                state.save();
                renderSchedule();
            });
        });
    });
}

// ===== NOTES =====
function initNotes() {
    const textarea = document.getElementById('quickNotes');
    const saveBtn = document.getElementById('saveNotesBtn');

    textarea.value = state.notes;

    saveBtn.addEventListener('click', () => {
        state.notes = textarea.value;
        state.save();
        showToast('Notes saved!', 'success');
    });

    // Auto-save on blur
    textarea.addEventListener('blur', () => {
        state.notes = textarea.value;
        state.save();
    });
}

// ===== FORMULAS =====
function initFormulas() {
    const input = document.getElementById('formulaInput');
    const addBtn = document.getElementById('addFormulaBtn');

    addBtn.addEventListener('click', () => addFormula());
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addFormula();
    });

    renderFormulas();
}

function addFormula() {
    const input = document.getElementById('formulaInput');
    const text = input.value.trim();
    if (!text) return;

    state.formulas.unshift({ id: Date.now(), text });
    state.save();
    input.value = '';
    renderFormulas();
    showToast('Formula added!', 'success');
}

function renderFormulas() {
    const list = document.getElementById('formulaList');
    if (state.formulas.length === 0) {
        list.innerHTML = '<li style="color:var(--text-muted);padding:8px 12px;font-size:13px;">No formulas saved yet.</li>';
        return;
    }

    list.innerHTML = state.formulas.map(f => `
        <li>
            <span>${escapeHtml(f.text)}</span>
            <button class="formula-delete" data-id="${f.id}">✕</button>
        </li>
    `).join('');

    list.querySelectorAll('.formula-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            state.formulas = state.formulas.filter(f => f.id !== id);
            state.save();
            renderFormulas();
        });
    });
}

// ===== ANALYTICS =====
function initAnalytics() {
    updateAnalytics();
    renderBreakdownBars();
}

function updateAnalytics() {
    const subjects = [
        { key: 'physics', fillId: 'physicsDonutFill', valueId: 'physicsDonutValue' },
        { key: 'chemistry', fillId: 'chemDonutFill', valueId: 'chemDonutValue' },
        { key: 'mathematics', fillId: 'mathDonutFill', valueId: 'mathDonutValue' },
    ];

    subjects.forEach(({ key, fillId, valueId }) => {
        const chapters = getAllChapters(key);
        const completed = chapters.filter(ch => state.getChapterStatus(ch.id) === 'completed').length;
        const percent = chapters.length > 0 ? Math.round((completed / chapters.length) * 100) : 0;

        const circumference = 2 * Math.PI * 50;
        const offset = circumference * (1 - percent / 100);

        const fill = document.getElementById(fillId);
        const value = document.getElementById(valueId);

        if (fill) {
            fill.style.strokeDasharray = circumference;
            fill.style.strokeDashoffset = offset;
        }
        if (value) value.textContent = `${percent}%`;
    });

    renderBreakdownBars();
}

function renderBreakdownBars() {
    const container = document.getElementById('breakdownBars');
    if (!container) return;

    const groups = [
        { label: 'Phy - Heavy Lifters', chapters: CHAPTERS_DATA.physics.heavyLifters, color: '#ef4444' },
        { label: 'Phy - Smart Lifters', chapters: CHAPTERS_DATA.physics.smartLifters, color: '#f59e0b' },
        { label: 'Phy - Other', chapters: CHAPTERS_DATA.physics.other, color: '#6366f1' },
        { label: 'Chem - Physical', chapters: CHAPTERS_DATA.chemistry.physical, color: '#10b981' },
        { label: 'Chem - Organic', chapters: CHAPTERS_DATA.chemistry.organic, color: '#a855f7' },
        { label: 'Chem - Inorganic', chapters: CHAPTERS_DATA.chemistry.inorganic, color: '#06b6d4' },
        { label: 'Math - High', chapters: CHAPTERS_DATA.mathematics.high, color: '#f59e0b' },
        { label: 'Math - Medium', chapters: CHAPTERS_DATA.mathematics.medium, color: '#6366f1' },
        { label: 'Math - Other', chapters: CHAPTERS_DATA.mathematics.other, color: '#64748b' },
    ];

    container.innerHTML = groups.map(g => {
        const completed = g.chapters.filter(ch => state.getChapterStatus(ch.id) === 'completed').length;
        const total = g.chapters.length;
        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

        return `
            <div class="breakdown-item">
                <span class="breakdown-label">${g.label}</span>
                <div class="breakdown-bar">
                    <div class="breakdown-bar-fill" style="width:${percent}%;background:${g.color}"></div>
                </div>
                <span class="breakdown-value">${completed}/${total}</span>
            </div>
        `;
    }).join('');
}

// ===== STREAK CALENDAR =====
function initStreakCalendar() {
    const container = document.getElementById('streakCalendar');
    if (!container) return;

    const today = new Date();
    const days = [];

    // Show last 35 days (5 weeks)
    for (let i = 34; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        const isActive = state.streak.calendar[dateStr];
        const isToday = i === 0;

        days.push(`<div class="streak-day ${isActive ? 'active' : ''} ${isToday ? 'today' : ''}" 
            title="${date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}"></div>`);
    }

    container.innerHTML = days.join('');
}

// ===== ACHIEVEMENTS =====
const ACHIEVEMENTS = [
    { id: 'first-chapter', icon: '🌱', name: 'First Step', desc: 'Complete your first chapter', check: () => Object.values(state.chapterStatus).filter(s => s === 'completed').length >= 1 },
    { id: 'five-chapters', icon: '⭐', name: 'Rising Star', desc: 'Complete 5 chapters', check: () => Object.values(state.chapterStatus).filter(s => s === 'completed').length >= 5 },
    { id: 'ten-chapters', icon: '🔥', name: 'On Fire', desc: 'Complete 10 chapters', check: () => Object.values(state.chapterStatus).filter(s => s === 'completed').length >= 10 },
    { id: 'twenty-chapters', icon: '💪', name: 'Unstoppable', desc: 'Complete 20 chapters', check: () => Object.values(state.chapterStatus).filter(s => s === 'completed').length >= 20 },
    { id: 'all-heavy', icon: '🏋️', name: 'Heavy Lifter', desc: 'Complete all Physics Heavy Lifters', check: () => CHAPTERS_DATA.physics.heavyLifters.every(ch => state.getChapterStatus(ch.id) === 'completed') },
    { id: 'all-physics', icon: '⚡', name: 'Physics Master', desc: 'Complete all Physics chapters', check: () => getAllChapters('physics').every(ch => state.getChapterStatus(ch.id) === 'completed') },
    { id: 'all-chemistry', icon: '🧪', name: 'Chemistry Wizard', desc: 'Complete all Chemistry chapters', check: () => getAllChapters('chemistry').every(ch => state.getChapterStatus(ch.id) === 'completed') },
    { id: 'all-math', icon: '📐', name: 'Math Genius', desc: 'Complete all Maths chapters', check: () => getAllChapters('mathematics').every(ch => state.getChapterStatus(ch.id) === 'completed') },
    { id: 'streak-3', icon: '🔥', name: '3-Day Streak', desc: 'Study 3 days in a row', check: () => state.streak.count >= 3 },
    { id: 'streak-7', icon: '🌟', name: 'Week Warrior', desc: 'Study 7 days in a row', check: () => state.streak.count >= 7 },
    { id: 'pomodoro-5', icon: '🍅', name: 'Pomodoro Pro', desc: 'Complete 5 Pomodoro sessions', check: () => state.pomodoroSessions >= 5 },
    { id: 'jee-ready', icon: '🏆', name: 'JEE Ready', desc: 'Complete ALL chapters!', check: () => [...getAllChapters('physics'), ...getAllChapters('chemistry'), ...getAllChapters('mathematics')].every(ch => state.getChapterStatus(ch.id) === 'completed') },
];

function initAchievements() {
    renderAchievements();
}

function checkAchievements() {
    renderAchievements();
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    if (!grid) return;

    grid.innerHTML = ACHIEVEMENTS.map(a => {
        const unlocked = a.check();
        return `
            <div class="achievement ${unlocked ? 'unlocked' : ''}">
                <div class="achievement-icon">${a.icon}</div>
                <div class="achievement-name">${a.name}</div>
                <div class="achievement-desc">${a.desc}</div>
            </div>
        `;
    }).join('');
}

// ===== MOTIVATION QUOTE =====
function initQuote() {
    const quoteEl = document.getElementById('motivationQuote');
    const quote = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
    quoteEl.innerHTML = `<p>${quote}</p>`;
}

// ===== RESET =====
function initResetButton() {
    const resetBtn = document.getElementById('resetAllBtn');
    resetBtn.addEventListener('click', () => {
        if (confirm('⚠️ Are you sure you want to reset ALL your progress? This cannot be undone!')) {
            if (confirm('This will delete ALL chapter tracking, notes, schedules, and streak data. Continue?')) {
                state.reset();
                location.reload();
            }
        }
    });
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastOut 0.3s ease-in forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ===== UTILITY =====
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ===== SAVE INDICATOR =====
let saveIndicatorTimeout = null;
function showSaveIndicator() {
    const indicator = document.getElementById('saveIndicator');
    if (!indicator) return;
    indicator.classList.add('visible');
    clearTimeout(saveIndicatorTimeout);
    saveIndicatorTimeout = setTimeout(() => {
        indicator.classList.remove('visible');
    }, 2000);
}

// ===== DAILY STUDY LOG =====
function initStudyLog() {
    const addBtn = document.getElementById('addStudyLogBtn');
    const dateEl = document.getElementById('dailyLogDate');

    if (dateEl) {
        const today = new Date();
        dateEl.textContent = today.toLocaleDateString('en-IN', {
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
        });
    }

    if (addBtn) {
        addBtn.addEventListener('click', addStudyLogEntry);
    }

    renderStudyLog();
}

function addStudyLogEntry() {
    const subject = document.getElementById('logSubject').value;
    const hours = parseFloat(document.getElementById('logHours').value);
    const topic = document.getElementById('logTopic').value.trim();

    if (!hours || hours <= 0) {
        showToast('Please enter valid hours!', 'warning');
        return;
    }

    const entry = {
        id: Date.now(),
        subject,
        hours,
        topic: topic || `${subject.charAt(0).toUpperCase() + subject.slice(1)} study`,
        date: new Date().toISOString(),
        dateKey: new Date().toISOString().split('T')[0]
    };

    state.studyLog.unshift(entry);
    state.updateStreak();
    state.save();

    document.getElementById('logHours').value = '';
    document.getElementById('logTopic').value = '';

    renderStudyLog();
    updateAllStats();
    showToast(`Logged ${hours}h of ${subject}! Keep going! 💪`, 'success');
}

function renderStudyLog() {
    const summaryEl = document.getElementById('dailyLogSummary');
    const entriesEl = document.getElementById('dailyLogEntries');
    if (!summaryEl || !entriesEl) return;

    const today = new Date().toISOString().split('T')[0];
    const todayLogs = (state.studyLog || []).filter(e => e.dateKey === today);

    const subjectHours = { physics: 0, chemistry: 0, mathematics: 0 };
    todayLogs.forEach(e => {
        if (subjectHours[e.subject] !== undefined) {
            subjectHours[e.subject] += e.hours;
        }
    });
    const totalHours = Object.values(subjectHours).reduce((a, b) => a + b, 0);

    summaryEl.innerHTML = `
        <div class="log-summary-item log-summary-physics">
            <span class="log-summary-value">${subjectHours.physics.toFixed(1)}h</span>
            <span class="log-summary-label">⚡ Physics</span>
        </div>
        <div class="log-summary-item log-summary-chemistry">
            <span class="log-summary-value">${subjectHours.chemistry.toFixed(1)}h</span>
            <span class="log-summary-label">🧪 Chemistry</span>
        </div>
        <div class="log-summary-item log-summary-mathematics">
            <span class="log-summary-value">${subjectHours.mathematics.toFixed(1)}h</span>
            <span class="log-summary-label">📐 Maths</span>
        </div>
        <div class="log-summary-item log-summary-total">
            <span class="log-summary-value">${totalHours.toFixed(1)}h</span>
            <span class="log-summary-label">🎯 Total Today</span>
        </div>
    `;

    if (todayLogs.length === 0) {
        entriesEl.innerHTML = '<p class="empty-state" style="padding:12px">No study hours logged today. Start studying! 📚</p>';
        return;
    }

    entriesEl.innerHTML = todayLogs.map(e => {
        const time = new Date(e.date).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
        return `
            <div class="log-entry">
                <div class="log-entry-dot ${e.subject}"></div>
                <span class="log-entry-info">${escapeHtml(e.topic)} <span style="color:var(--text-muted);font-size:11px;">at ${time}</span></span>
                <span class="log-entry-hours">${e.hours}h</span>
                <button class="log-entry-delete" data-id="${e.id}">✕</button>
            </div>
        `;
    }).join('');

    entriesEl.querySelectorAll('.log-entry-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            state.studyLog = state.studyLog.filter(l => l.id !== id);
            state.save();
            renderStudyLog();
        });
    });
}

// ===== EXPORT / IMPORT =====
function initExportImport() {
    const exportBtn = document.getElementById('exportDataBtn');
    const importBtn = document.getElementById('importDataBtn');
    const importFile = document.getElementById('importFileInput');

    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const data = state.exportData();
            const blob = new Blob([data], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `jee-tracker-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            showToast('📦 Progress exported successfully!', 'success');
        });
    }

    if (importBtn && importFile) {
        importBtn.addEventListener('click', () => {
            importFile.click();
        });

        importFile.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (evt) => {
                if (confirm('⚠️ This will replace all current progress with imported data. Continue?')) {
                    const success = state.importData(evt.target.result);
                    if (success) {
                        showToast('✅ Progress imported successfully! Reloading...', 'success');
                        setTimeout(() => location.reload(), 1000);
                    } else {
                        showToast('❌ Failed to import. Invalid file format.', 'warning');
                    }
                }
            };
            reader.readAsText(file);
            importFile.value = '';
        });
    }
}

// ===== CHAPTER SEARCH =====
function initChapterSearch() {
    const searches = [
        { inputId: 'physicsSearch', sectionId: 'section-physics' },
        { inputId: 'chemistrySearch', sectionId: 'section-chemistry' },
        { inputId: 'mathSearch', sectionId: 'section-mathematics' },
    ];

    searches.forEach(({ inputId, sectionId }) => {
        const input = document.getElementById(inputId);
        if (!input) return;

        input.addEventListener('input', () => {
            const query = input.value.toLowerCase().trim();
            const section = document.getElementById(sectionId);
            if (!section) return;

            const cards = section.querySelectorAll('.chapter-card');
            cards.forEach(card => {
                if (!query) {
                    card.classList.remove('search-hidden');
                    return;
                }
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.classList.remove('search-hidden');
                } else {
                    card.classList.add('search-hidden');
                }
            });
        });
    });
}

// ===== CONFETTI CELEBRATION =====
function launchConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#6366f1', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#22c55e', '#06b6d4', '#f97316'];
    const particles = [];

    for (let i = 0; i < 150; i++) {
        particles.push({
            x: canvas.width / 2 + (Math.random() - 0.5) * 200,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 15,
            vy: Math.random() * -18 - 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 3,
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 10,
            gravity: 0.3 + Math.random() * 0.2,
            opacity: 1
        });
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        particles.forEach(p => {
            p.x += p.vx;
            p.vy += p.gravity;
            p.y += p.vy;
            p.rotation += p.rotSpeed;
            p.opacity -= 0.008;

            if (p.opacity > 0 && p.y < canvas.height + 50) {
                alive = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
                ctx.restore();
            }
        });

        frame++;
        if (alive && frame < 200) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

// Enhanced chapter status change to trigger confetti on milestones
const originalSetChapterStatus = state.setChapterStatus.bind(state);
state.setChapterStatus = function(id, status) {
    originalSetChapterStatus(id, status);
    if (status === 'completed') {
        const completedCount = Object.values(this.chapterStatus).filter(s => s === 'completed').length;
        const milestones = [1, 5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 86];
        if (milestones.includes(completedCount)) {
            launchConfetti();
            if (completedCount === 86) {
                showToast('🏆🎉 INCREDIBLE! You completed ALL 86 chapters! JEE 2027, here you come!', 'success');
            } else if (completedCount >= 50) {
                showToast(`🎉 Amazing! ${completedCount} chapters done! Over halfway there!`, 'success');
            } else {
                showToast(`🎉 Milestone! ${completedCount} chapters completed! Keep the momentum!`, 'success');
            }
        }
    }
};

// ===== WEEKLY HOURS CHART =====
function renderWeeklyHoursChart() {
    const container = document.getElementById('weeklyHoursChart');
    if (!container) return;

    const today = new Date();
    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekData = [];

    for (let i = 6; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const dateKey = date.toISOString().split('T')[0];
        const dayName = dayLabels[date.getDay()];
        const isToday = i === 0;

        const dayLogs = (state.studyLog || []).filter(e => e.dateKey === dateKey);
        const hours = { physics: 0, chemistry: 0, mathematics: 0 };
        dayLogs.forEach(e => {
            if (hours[e.subject] !== undefined) hours[e.subject] += e.hours;
        });
        const total = hours.physics + hours.chemistry + hours.mathematics;

        weekData.push({ dateKey, dayName, hours, total, isToday });
    }

    const maxHours = Math.max(1, ...weekData.map(d => d.total));
    const maxHeight = 120;

    container.innerHTML = weekData.map(d => {
        const phH = d.total > 0 ? Math.max(4, (d.hours.physics / maxHours) * maxHeight) : 0;
        const chH = d.total > 0 ? Math.max(4, (d.hours.chemistry / maxHours) * maxHeight) : 0;
        const maH = d.total > 0 ? Math.max(4, (d.hours.mathematics / maxHours) * maxHeight) : 0;

        return `
            <div class="hours-bar-col">
                <span class="hours-bar-value">${d.total > 0 ? d.total.toFixed(1) + 'h' : '-'}</span>
                <div class="hours-bar-stack">
                    ${d.hours.physics > 0 ? `<div class="hours-bar-segment physics" style="height:${phH}px" title="Physics: ${d.hours.physics}h"></div>` : ''}
                    ${d.hours.chemistry > 0 ? `<div class="hours-bar-segment chemistry" style="height:${chH}px" title="Chemistry: ${d.hours.chemistry}h"></div>` : ''}
                    ${d.hours.mathematics > 0 ? `<div class="hours-bar-segment mathematics" style="height:${maH}px" title="Maths: ${d.hours.mathematics}h"></div>` : ''}
                    ${d.total === 0 ? '<div style="height:4px;width:100%;background:rgba(255,255,255,0.05);border-radius:2px;"></div>' : ''}
                </div>
                <span class="hours-bar-label" style="${d.isToday ? 'color:var(--accent-primary);' : ''}">${d.dayName}${d.isToday ? ' ★' : ''}</span>
            </div>
        `;
    }).join('');
}
