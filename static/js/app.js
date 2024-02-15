// Define the endpoint for samples JSON data
const samplesEndpoint = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and process it
d3.json(samplesEndpoint)
  .then(results => {
    // Extract data for the first sample
    const firstSample = results.samples [0];
    console.log(results);
    const metadata = results.metadata[0]; 
    console.log (metadata)
    // Extract top 10 samples
    const topSamples = firstSample.sample_values.slice(0, 10);
    const topOtuIds = firstSample.otu_ids.slice(0, 10);
    const topOtuLabels = firstSample.otu_labels.slice(0, 10);

    // Create trace for bar chart
    const trace1 = {
      x: topSamples.reverse(), // Reverse the order for horizontal bar chart
      y: topOtuIds.map(id => `OTU ${id}`), // Convert otu_ids to a readable format
      text: topOtuLabels, // Add otu_labels as hover text
      type: 'bar',
      orientation: 'h' // Horizontal bar chart
    };

    // Define data for the plot
    const data = [trace1];

    // Define layout for the plot
    const layout = {
      title: 'Top 10 OTUs',
      xaxis: { title: 'Sample Values' },
      yaxis: { title: 'OTU IDs' }
    };

    // Plot the bar chart
    Plotly.newPlot("bar", data, layout);

    // Populate dropdown menu with sample IDs
    const dropdown = document.getElementById("selDataset");
    const sample = results.samples;
    results.samples.forEach((sample, index) => {
        
      const option = document.createElement("option");
      option.value = index;
      option.text = sample.id;
      dropdown.appendChild(option);
    });

    // Add event listener to dropdown menu
    dropdown.addEventListener("change", function() {
      const selectedIndex = this.value;
      console.log(results.samples)
      console.log(selectedIndex)
      const selectedSample = results.samples[selectedIndex];
      const selectedMetadata = results.metadata[selectedIndex]; // Fetch metadata for the selected sample

      updateBarChart(selectedSample);
      updateBubbleChart(selectedSample);
      updateDemographicInfo(selectedMetadata);
    });

    // Function to update the bar chart based on selected sample
    function updateBarChart(sample) {
      const updatedTopSamples = sample.sample_values.slice(0, 10).reverse();
      const updatedTopOtuIds = sample.otu_ids.slice(0, 10).map(id => `OTU ${id}`);
      const updatedTopOtuLabels = sample.otu_labels.slice(0, 10);

      Plotly.restyle("bar", {
        x: [updatedTopSamples],
        y: [updatedTopOtuIds],
        text: [updatedTopOtuLabels]
      });
    }
    function updateBubbleChart(sample) {
      const trace = {
        x: sample.otu_ids,
        y: sample.sample_values,
        mode: 'markers',
        marker: {
          size: sample.sample_values,
          color: sample.otu_ids,
          colorscale: 'Viridis', // Adjust color scale as needed
          opacity: 0.5
        },
        text: sample.otu_labels,
        type: 'scatter'
      };

      const layout = {
        title: 'Bubble Chart for Selected Sample',
        xaxis: { title: 'OTU IDs' },
        yaxis: { title: 'Sample Values' }
      };

      Plotly.newPlot('bubble', [trace], layout);
    }
   
      // Function to update demographic info based on selected sample
      function updateDemographicInfo(metadata) {
        document.getElementById("id").textContent = `id: ${metadata.id}`;
        document.getElementById("ethnicity").textContent = `ethnicity: ${metadata.ethnicity}`;
        document.getElementById("gender").textContent = `gender: ${metadata.gender}`;
        document.getElementById("age").textContent = `age: ${metadata.age}`;
        document.getElementById("location").textContent = `location: ${metadata.location}`;
        document.getElementById("bbtype").textContent = `bbtype: ${metadata.bbtype}`;
        document.getElementById("wfreq").textContent = `wfreq: ${metadata.wfreq}`;
      }
  })
  
  .catch(error => console.error('Error fetching data:', error));
 
  





