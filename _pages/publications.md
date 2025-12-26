---
layout: single
permalink: /publications/
title: "Publications"
excerpt: "Publications"
author_profile: true
classes: pubs
---

You can also find my articles on <u><a href="https://scholar.google.com/citations?user=T6pswigAAAAJ&hl=en&oi=ao">my Google Scholar profile</a>.</u>

Shared first authorship: \*

{% assign gs = site.data.scholar_stats %}

{% if gs and gs.citations_all %}
<div class="notice--primary">
  <strong>Google Scholar (all-time):</strong>
  Citations <strong>{{ gs.citations_all }}</strong> · h-index <strong>{{ gs.h_index_all }}</strong> · i10-index <strong>{{ gs.i10_index_all }}</strong>
  {% if gs.updated_utc %}<br><small>Last synced: {{ gs.updated_utc | date: "%d/%m/%Y" }} (UTC)</small>{% endif %}
</div>
{% else %}
<div class="notice--info">
  Google Scholar metrics will appear here once the sync workflow has successfully run.
</div>
{% endif %}

<hr>

{% capture pubs_md %}

## Submitted, preprints [2]

1. **Bordes**, Stont, Bajaj, Chang, Ebert, Miranda, Schlegel, Reinhardt, …, 9 authors …, Beyeler, Gassen, Schmidt (2025) Loss of noradrenergic Fkbp5 disrupts social behavior and norepinephrine dynamics in the basolateral amygdala. *Submitted* — [Preprint](https://www.biorxiv.org/content/10.64898/2025.12.10.693477v1)  
   [By linking Noradrenergic Fkbp5 regulation to phasic basolateral amygdala norepinephrine and mitochondrial/synaptic remodeling, this study highlights a circuit-specific route to normalize social salience without broadly suppressing noradrenergic function.]

1. **Bordes**\*, Ji\*, Gasperoni, Sudre-Chinsky, Harbich, Flachskamm, Fontanet, Narayan, Uhr, Namendorf, Chen, Hausch, Lopez, Schmidt (2025). Pharmacological Inhibition of FKBP51 Mitigates Early Life Adversity-Induced Social Deficits. *Submitted* — [Preprint](https://www.biorxiv.org/content/10.64898/2025.12.13.694102v1)  
   [Early-life adversity disrupts social behavior and brain gene expression, which SAFit2 (an FKBP51 antagonist) can largely rescue]
{: start="16" reversed="reversed" }

PEER-REVIEWED PUBLICATIONS: 20 ARTICLES

## Research articles [14 total]

1. Yang, Narayan, **Bordes**, …, 11 authors…, Lopez, Schmidt (2025) Mineralocorticoid receptor in glutamatergic neurons modulates anxiety exclusively in male mice via regulation of the actin bundling factor FAM107a. *Biological Psychiatry Global Open Science* — [Link](https://www.sciencedirect.com/science/article/pii/S2667174325002058?via%3Dihub)  
   [This work defines a cell-type–specific Mineralocorticoid Receptor pathway for stress-related behavior: male-selective baseline anxiety, associated hippocampal alterations, and a causal Fam107a mechanism capable of reversing the behavioral deficit]

1. van Doeselaar, Abromeit, Stark, Menegaz, Mitra, Yang, Rehawi, Huettl, **Bordes**, …, 8 authors …, Schmidt (2025) FKBP51 in glutamatergic forebrain neurons promotes early life stress inoculation in female mice. *Nature Communications* — [Link](https://www.nature.com/articles/s41467-025-57952-x)  
   [This research article highlights the importance of cell-type specific genetic stress risk markers on the early life stressed-induced behavioral alterations and brain genetic profile]

1. **Bordes**, Bajaj, Miranda, …, 8 authors …, Gassen, Schmidt (2024) Sex-specific fear acquisition following early life stress is linked to amygdala and hippocampal purine and glutamate metabolism. *Communications Biology* — [Link](https://www.nature.com/articles/s42003-024-07396-8)  
   [This research article shows that early life stress disrupts the HPA axis and machine-learning identified fear memory in a sex-specific manner, revealing differences in brain metabolism]

1. Kovarova, **Bordes**, Mitra, Narayan, Springer, Brix, Deussing, Schmidt (2024) Deep phenotyping reveals CRH and FKBP51-dependent behavioral profiles following chronic social stress exposure in male mice. *Neuropsychopharmacology* — [Link](https://doi.org/10.1038/s41386-024-02008-9)  
   [This research article highlights the importance of genetic stress risk markers on the social behavioral profile following chronic stress exposure]

1. Miranda, **Bordes**, Pütz, Schmidt, Müller-Myhsok (2023) DeepOF: a Python package for supervised and unsupervised pattern recognition in mice motion tracking data. *Journal of Open Source Software* — [Link](https://joss.theoj.org/papers/10.21105/joss.05394)

1. **Bordes**\*, Miranda\*, Reinhardt, …, 11 authors …, Müller-Myhsok, Schmidt (2023) Automatically annotated motion tracking identifies a distinct social behavioral profile following chronic social defeat stress. *Nature Communications* — [Link](https://www.nature.com/articles/s41467-023-40040-3)

1. Kos, Lopez, **Bordes**, …, 13 authors …, Schmidt, Chen (2023) Early life adversity shapes social subordination and cell type–specific transcriptomic patterning in the ventral hippocampus. *Science Advances* — [Link](https://www.science.org/doi/full/10.1126/sciadv.adj3793)

1. van Doeselaar, Stark, Mitra, Yang, **Bordes**, …, 7 authors …, Lopez, Czisch, Schmidt (2023) Sex-specific and opposed effects of FKBP51 in glutamatergic and GABAergic neurons: Implications for stress susceptibility and resilience. *PNAS* — [Link](https://www.pnas.org/doi/10.1073/pnas.2300722120)

1. Brix, Monleon, Collado, Ederveen, Toksöz, **Bordes**, van Doeselaar, Engelhardt, Mitra, Narayan, Schmidt (2023) Metabolic effects of early life stress and pre-pregnancy obesity are longlasting and sex-specific in mice. *European Journal of Neuroscience* — [Link](https://onlinelibrary.wiley.com/doi/full/10.1111/ejn.16047)

1. Brix, Toksöz, Aman, Kovarova, Springer, **Bordes**, …, 6 authors …, Deussing, Schmidt (2022) Contribution of the co-chaperone FKBP51 in the ventromedial hypothalamus to metabolic homeostasis in male and female mice. *Molecular Metabolism* — [Link](https://www.sciencedirect.com/science/article/pii/S221287782200148X?via%3Dihub)

1. Brix, Häusl, Toksöz, **Bordes**, …, 6 authors …, Chen, Schmidt (2022) The co-chaperone FKBP51 modulates HPA axis activity and age-related maladaptation of the stress system in pituitary proopiomelanocortin cells. *Psychoneuroendocrinology* — [Link](https://www.sciencedirect.com/science/article/pii/S0306453022000117?via%3Dihub)

1. Engelhardt, Tang, Elkhateib, **Bordes**, …, 7 authors …, Deussing, Schmidt (2021) FKBP51 in the Oval Bed Nucleus of the Stria Terminalis Regulates Anxiety-Like Behavior. *eNeuro* — [Link](https://www.eneuro.org/content/8/6/ENEURO.0425-21.2021.long)

1. Bonapersona, Hoijtink, RELACS Consortium: (Abbinck, Baram, Bolton, **Bordes**, ..., 12 authors), Sarabdjitsingh, Joëls (2021) Increasing the statistical power of animal experiments with historical control data. *Nature Neuroscience* — [Link](https://www.nature.com/articles/s41593-020-00792-3)  
   [This research article illustrates the benefits of utilizing historical control data to minimize the number of animals used and improve statistical power in studies on early life stress-induced behavioral symptoms]

1. van Doeselaar, Yang, **Bordes**, Brix, Engelhardt, Tang & Schmidt (2020) Chronic social defeat stress in female mice leads to sex-specific behavioral and neuroendocrine effects. *Stress* — [Link](https://www.tandfonline.com/doi/full/10.1080/10253890.2020.1864319)  
   [This research article showed the importance of sex in studying the effects of chronic stress exposure]
{: start="14" reversed="reversed" }

## Review & commentary [6 total]

1. Bittar, **Bordes**, Nicolas, Calhoon, Beyeler (2025) Chapter 30. Pre-Clinical Models of Emotional Dysregulations. *Handbook of Human Affective Neuroscience, 2nd edition* — [Link](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-human-affective-neuroscience/preclinical-models-of-emotional-dysregulations-in-animals/11E422034B11BA423A077A1D1FDE7DC0)

1. Albayrak, de Fátima da Silva Vaz, **Bordes**, Ünlü, Sep, Vinkers, Pinto, Yapıcı Eser (2024) Translational models of stress and resilience: An applied neuroscience methodology review. *Neuroscience Applied* — [Link](https://doi.org/10.1016/j.nsa.2024.104064)

1. Voulgaropoulou, Bastiaanssen, Alves, Viglione, **Bordes**, Jurek, Paribello, Sep (2024) Editorial: An interdisciplinary perspective on resilience - A special section in Neuroscience. *Neuroscience Applied* — [Link](https://doi.org/10.1016/j.nsa.2024.104044)

1. **Bordes**, Miranda, Müller-Myhsok, Schmidt (2023) Advancing social behavioral neuroscience by integrating ethology and comparative psychology methods through machine learning. *Neuroscience & Biobehavioral Reviews* — [Link](https://doi.org/10.1016/j.neubiorev.2023.105243)

1. Miranda\*, **Bordes**\*, Gasperoni, Lopez (2023) Increasing resolution in stress neurobiology: from single cells to complex group behaviors. *Stress* — [Link](https://www.tandfonline.com/doi/full/10.1080/10253890.2023.2186141)

1. von Mücke-Heim, Urbina-Treviño, **Bordes**, Ries, Schmidt, Deussing (2023) Introducing a depression-like syndrome for translational neuropsychiatry: a plea for taxonomical validity and improved comparability between humans and mice. *Molecular Psychiatry* — [Link](https://www.nature.com/articles/s41380-022-01762-w)  
   [This review highlights the difficulties in translating preclinical stress models to clinical settings, emphasizing the need for advanced computational tools and better alignment with clinical symptoms. This is relevant to the current research proposal, as similar issues affect preclinical models of anxiety disorders]
{: start="6" reversed="reversed" }

{% endcapture %}

<div class="pubs-list">
  {{ pubs_md | markdownify }}
</div>
