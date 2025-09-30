console.log("vis.js loaded");

const typingData = [0, 0, 0, 0, 0, 0, 0, 1, 14, 67, 88, 97, 158, 221, 215, 102, 32, 4, 1];

const svg = document.getElementById("chart");
const chartWidth = svg.getAttribute("width");
const chartHeight = svg.getAttribute("height");
const chartLabelsX = document.getElementById("chart-label-x");
const barWidth = chartWidth / typingData.length;

const infobox = document.getElementById("infobox");

typingData.forEach((value, i) => {
    const barHeight = value;
    const x = i * barWidth + 5;
    const y = chartHeight - barHeight;

    // Create bars
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", barWidth - 10);
    rect.setAttribute("height", barHeight);
    svg.appendChild(rect);

    // Interaction
    rect.addEventListener("mouseover", () => {
        rect.setAttribute("fill", "orange");
        infobox.style.display = "block";
        const range = "WPM Range: " + (i*10) + '-' + ((i * 10) + 9);
        infobox.textContent = `Tests completed: ${value}\n${range}`;
    });

    rect.addEventListener("mousemove", (e) => {
        infobox.style.left = e.pageX + 10 + "px";
        infobox.style.top = e.pageY - 20 + "px";
    });

    rect.addEventListener("mouseout", () => {
        rect.setAttribute("fill", "steelblue");
        infobox.style.display = "none";
    });

    // Create x-axis labels
    const label = document.createElement("p");
    label.textContent = (i*10) + '-' + ((i * 10) + 9); // labels 1–20
    label.style.width = (barWidth) + "px";
    label.style.display = "inline-block";
    label.style.textAlign = "center";
    label.style.fontSize = '12px';
    label.id = "chart-x";
    chartLabelsX.appendChild(label);
});