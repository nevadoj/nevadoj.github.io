import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

console.log("as3vis.js loaded");

async function fetchLongData() {
  const data = await d3.csv("./datasets/videogames_long.csv");
  return data;
}

async function fetchWideData() {
    const data = await d3.csv("./datasets/videogames_wide.csv");
    return data;
}

async function render(viewID, spec) {
    const result = await vegaEmbed(viewID, spec);
    result.view.run();
}

async function fetchData() {
  const longData = await d3.csv("./datasets/videogames_long.csv");
  const wideData = await d3.csv("./datasets/videogames_wide.csv");

  return { longData, wideData };
}

fetchData().then(async (data) => {
    const selection = vl.selectPoint().on("mouseover").clear("mouseout");
    const selection2 = vl.selectPoint().on("mouseover").clear("mouseout");

    const bar1 = vl.markBar({tooltip: true})
        .data(data.wideData)
        .params(selection2)
        .encode(
            vl.x().fieldN("Genre").scale({padding: 0.1}),
            vl.y().fieldQ("Global_Sales").aggregate("sum"),
            vl.color().fieldN("Genre"),
            vl.opacity().value(0.8)
        )
        .toSpec();

    const line1 = vl.markLine({tooltip: true})
        .data(data.wideData)
        .encode(
            vl.x().fieldN("Platform"),
            vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales"),
        )
        .toSpec();

    const point1 = vl.markCircle({tooltip: true})
        .data(data.wideData)
        .params(selection)
        .encode(
            vl.x().fieldN("Platform"),
            vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales"),
        )
        .toSpec();

        const vis1 = vl.layer(line1, point1, bar1).height(400).title("Global Sales by Genre and Platform").toSpec();
        render("#as3-vis1", vis1);


    const vis2 = vl.markBar({tooltip: true})
        .data(data.wideData)
        .encode(
            vl.x().fieldO("Year"),
            vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales (millions)"),
            vl.color().fieldN("Platform").scale({scheme: "tableau20"})
        )
        .width(1000)
        .height(400)
        .title("Sales Over Time by Platform")
        .toSpec();
    
    render("#as3-vis2", vis2);

    const vis3 = vl.markBar({tooltip: true})
        .data(data.wideData)
        .encode(
            vl.x().fieldO("Year"),
            vl.y().fieldQ("Global_Sales").aggregate("sum").title("Global Sales (millions)"),
            vl.color().fieldN("Genre").scale({scheme: "tableau20"})
        )
        .width(1000)
        .height(400)
        .title("Sales Over Time by Genre")
        .toSpec();
    render("#as3-vis3", vis3);

    const vis4 = vl.markBar({tooltip: true})
        .data(data.longData)
        .encode(
            vl.x().fieldN("platform").title("Platform"),
            vl.y().fieldQ("sales_amount").aggregate('sum').title("Amount Sold (million)"),
            vl.color().fieldN("sales_region").title("Region"),
            vl.xOffset().fieldN("sales_region") 
        )
        .title("Regional Sales vs. Platform")
        .toSpec();
    render("#as3-vis4", vis4);

    const fightingGameSaleRegions = vl.markLine({tooltip: true})
        .data(data.longData)
        .transform(
            vl.filter('datum.genre == "Fighting"'),
            vl.filter('datum.publisher == "Capcom" || datum.publisher == "Namco Bandai Games" || datum.publisher == "SNK" || datum.publisher == "Cygames" || datum.publisher == "Warner Bros. Interactive Entertainment" || datum.publisher == "Arc System Works" || datum.publisher == "Sega"')
        )
        .encode(
            vl.x().fieldO("year").title("Year"),
            vl.y().fieldQ("sales_amount").aggregate('sum').title("Amount Sold (million)"),
            vl.color().fieldN("sales_region").title("Region"),
        )
        .title("Fighting Game Sales by Region")
        .toSpec();
  
    const publisherSales = vl.markArc({tooltip: true})
        .data(data.longData)
        .transform(
            vl.filter('datum.genre == "Fighting"'),
                vl.filter('datum.publisher == "Capcom" || datum.publisher == "Namco Bandai Games" || datum.publisher == "SNK" || datum.publisher == "Cygames" || datum.publisher == "Warner Bros. Interactive Entertainment" || datum.publisher == "Arc System Works" || datum.publisher == "Sega"')
        )
        .encode(
            vl.theta().fieldQ("sales_amount").aggregate('sum'),
            vl.color().fieldN("publisher").title("Publisher").scale({scheme: 'blues'})
        )
        .title("Total Fighting Game Sales by EVO 2025 Main Game Publishers")
        .toSpec();

    const allGenresSales = vl.markArc({tooltip: true})
        .data(data.wideData)
        .transform(
            vl.filter('datum.Publisher == "Capcom" || datum.Publisher == "Namco Bandai Games" || datum.Publisher == "SNK" || datum.Publisher == "Cygames" || datum.Publisher == "Warner Bros. Interactive Entertainment" || datum.Publisher == "Arc System Works" || datum.Publisher == "Sega"')
        )
        .encode(
            vl.theta().fieldQ("Global_Sales").aggregate("sum").title("Global Sales (million)"),
            vl.color().fieldN("Genre").legend({orient: 'bottom'}).scale({scheme: "tableau20"}),
        )
        .title("Genre Sales of EVO 2025 Main Game Publishers")
        .toSpec();

    const vis5 = vl.vconcat(
            vl.hconcat(
                fightingGameSaleRegions, 
                publisherSales
            )
            .resolve({ scale: { color: "independent" } }), 
            allGenresSales
        )
        .title("Analyzing Fighting Games and Publishers of EVO 2025")
        .toSpec();
    render("#as3-vis5", vis5);
});

