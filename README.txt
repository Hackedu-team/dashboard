Ce que nous faisons dans notre équipe, c'est un pipeline automatique qui réalise le processus d'ETLD de manière fiable et efficace.


A- Extraction

Afin de réaliser l'extraction des informations dans les documents PDF mis à notre disposition, nous utilisons des outils de Reconnaissance optique des Caractères (OCR) afin d'extraire : 
- Textes
- Diagrammes (Découpage guidé)
- Tableaux

Une fois ces opérations terminées, nous pouvons passer à la transformation




B- Transformation

La transformation des données extraites consiste en leur structuration. Il s'agit de réorganiser chacun des instances de données sous un format moderne et malléable pour le chargement dans un entrepôt de données, soit le format JSON. 
Nous nous aidons dans cette tâche d'outils pour la correction optique de texte, et d'expressions régulières pour leur découpage.




C- Chargement

Le chargement des informations transformées se fait dans une base de données orientée document, ici Mongo Database, afin d'assurer un agencement consistant et cohérent des informations. Également, la base de données document s'accommode avec aisance à la nature hétérogène de  informations extraites de nos documents PDF.
Avantage non moindre, une base de donnée Mongo est facilement déployable en ligne, et exploitable via un SDK ou une API




D- Affichage

L'objectif final de cet hackaton est de mettre à la disposition des décideurs, et même, du plus grand nombre, des informations consistantes sur le domaine de l'éducation, afin de prendre des décisions éclairées. Afin de faciliter cet accès, nous avons utilisé une application Web, développée avec une technologie de pointe React JS, afin de permettre à nos utilisateurs de questionner notre entrepôt de données depuis leur téléphone portable, leur ordinateur de bureau, leur écran intelligent. 
Un moteur de recherche intelligent couplé à cette application permet de retourner à l'utilisateur l'information qu'il désirerait. S'agisse-t-il ici d' :
- Un diagramme
- Un tableau (visualisé grace à notre outil de création de diagrammes)
- Un article ou morceau d'article






//           UTILISATION DES OUTILS






