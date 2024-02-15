#Belly Button Challenge

The dashboard is designed to visualize and analyze the microbes that colonise human navels data obtained from various samples. It provides interactive visualizations allowing users to explore the composition of microbial communities across different samples.

Dashboard - features:

1) Dropdown Menu: Allows users to select a specific sample from the dataset. Upon selection, the bar chart, bubble chart, and demographic information are updated to display data corresponding to the selected sample

2) Bar Chart: Displays the top 10 operational taxonomic units (OTUs) for the selected sample, with sample values on the x-axis and OTU IDs on the y-axis. The bar chart is interactive and updates dynamically based on the sample selected from the dropdown menu.

3) Bubble Chart: Shows a bubble chart representing the distribution of OTUs in the selected sample. The size of each bubble represents the sample value, and the color represents the OTU ID. This chart provides a comprehensive view of the abundance and diversity of microbial species in the sample.

4) Demographic Information Panel: Displays demographic information associated with the selected sample. The panel includes details such as ID, ethnicity, gender, age, location, belly button type, and washing frequency. This information provides context for understanding the microbial composition across different demographic groups.

Usage:

Open the dashboard in a web browser: https://pmadata.github.io/belly-button-challenge/ .
Use the dropdown menu to select a sample of interest.
Explore the bar chart and bubble chart to visualize the microbial composition of the selected sample.
View demographic information in the panel to understand the characteristics of the selected sample's donor.
Data Source:
The dashboard fetches data from a JSON :  https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

Technologies Used:

JavaScript (with D3.js library)
Plotly.js for interactive visualizations
HTML/CSS for dashboard layout and styling


Note:
Ensure an active internet connection to fetch data from the JSON endpoint. The dashboard may not function properly without internet access.
For this assignment support from ChatGPT and Ask BCS were utilized around setting dropdown menu and connecting updates across all charts. 
