const puppet = require("puppeteer");
const express = require("express");
const cors = require("cors");

const axios = require("axios");
const app = express();
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("35314e55f5ba4dcbb8b1d344ce5fcc93");
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.set({ "Allow-access-Allow-Origin": "*" });

  tutorial = async () => {
    res.set({ "Allow-access-Allow-Origin": "*" });

    const URL = "https://www.nairaland.com";

    const browser = await puppet.launch({ timeout: 0 });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(URL);
    let data = await page.evaluate(() => {
      let results = [];
      let items = document.querySelectorAll(".featured.w a");
      items.forEach((item) => {
        results.push({
          url: item.getAttribute("href"),
          title: item.innerHTML,
        });
      });
      return results;
    });
    res.status(200).json(data.slice(0, 117));
    await browser.close();
  };

  tutorial();
});

app.get("/open/:id", (req, res) => {
  const id = req.params.id;
  res.set({ "Allow-access-Allow-Origin": "*" });

  const trid = decodeURIComponent(id);

  console.log(trid);

  tut = async () => {
    res.set({ "Allow-access-Allow-Origin": "*" });

    const browser = await puppet.launch({ timeout: 0 });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(trid);
    let data = await page.evaluate(() => {
      let resu = [];
      let topic = [];
      let items = document.querySelectorAll(
        "html body div.body table tbody tr td.l.w.pd"
      );
      let ite = document.querySelectorAll("html body div.body h2");

      ite.forEach((item) => {
        topic.push({
          topic: item.innerHTML,
        });
        console.log(topic);
      });

      items.forEach((item) => {
        resu.push({
          title: item.innerHTML,
        });
        console.log(resu);
      });
      return [resu.slice(0, 1), topic];
    });

    res.status(200).json(data);
    await browser.close();
  };
  tut();
});

app.get("/newpage/:id", (req, res) => {
  res.set({ "Allow-access-Allow-Origin": "*" });

  tutorial1 = async () => {
    res.set({ "Allow-access-Allow-Origin": "*" });
    let id = req.params.id;
    console.log(id);
    const URL = `https://nairaland.com/news/${id}`;
    const browser = await puppet.launch({ timeout: 0 });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(URL);
    let data = await page.evaluate(() => {
      let results = [];
      let items = document.querySelectorAll("a");
      items.forEach((item) => {
        results.push({
          url: item.getAttribute("href"),
          title: item.innerHTML,
        });
      });
      return results;
    });
    res.set({ "Allow-access-Allow-Origin": "*" });

    res.status(200).json(data.slice(21, 79));
    console.log(data);
    await browser.close();
  };
  tutorial1();
});

app.get("/newsapi/:id", (req, res) => {
  res.set({ "Allow-access-Allow-Origin": "*" });

  let id = req.params.id;
  newsapi.v2
    .everything({
      q: `${id}`,

      language: "en",
      sortBy: "relevancy",
      pageSize: 99,
    })
    .then((response) => {
      console.log(response);
      res.json(response.articles);
    });
});

app.get("/forums/:id", (req, res) => {
  res.set({ "Allow-access-Allow-Origin": "*" });

  tutorial = async () => {
    res.set({ "Allow-access-Allow-Origin": "*" });
    let id = req.params.id;
    const URL = "https://www.nairaland.com/" + id;

    const browser = await puppet.launch({ timeout: 0 });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(URL);
    let data = await page.evaluate(() => {
      let results = [];
      let items = document.querySelectorAll("table b > a");
      items.forEach((item) => {
        results.push({
          url: item.getAttribute("href"),
          title: item.innerHTML,
        });
      });

      return results;
    });
    res.status(200).json(data.slice(5, 172));
    await browser.close();
  };

  tutorial();
});
app.get("/forums/:id/:idd", (req, res) => {
  res.set({ "Allow-access-Allow-Origin": "*" });

  tutorial1 = async () => {
    res.set({ "Allow-access-Allow-Origin": "*" });
    let id = req.params.id;
    let idd = req.params.idd;
    console.log(id);
    const URL = `https://nairaland.com/${id}/${idd}`;
    const browser = await puppet.launch({ timeout: 0 });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(URL);
    let data = await page.evaluate(() => {
      let results = [];
      let items = document.querySelectorAll(" b > a");
      items.forEach((item) => {
        results.push({
          url: item.getAttribute("href"),
          title: item.innerHTML,
        });
      });
      return results;
    });
    res.set({ "Allow-access-Allow-Origin": "*" });

    res.status(200).json(data.slice(1, 172));
    console.log(data);
    await browser.close();
  };
  tutorial1();
});

app.get("/trending", (req, res) => {
  res.set({ "Allow-access-Allow-Origin": "*" });

  tutorial1 = async () => {
    res.set({ "Allow-access-Allow-Origin": "*" });
    const URL = `https://nairaland.com/trending`;

    const browser = await puppet.launch({ timeout: 0 });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(URL);
    let data = await page.evaluate(() => {
      let results = [];
      let items = document.querySelectorAll(" b > a");
      items.forEach((item) => {
        results.push({
          url: item.getAttribute("href"),
          title: item.innerHTML,
        });
      });
      return results;
    });
    res.set({ "Allow-access-Allow-Origin": "*" });

    res.status(200).json(data.slice(1, 172));
    console.log(data);
    await browser.close();
  };
  tutorial1();
});

app.get("/no", (req, res) => {
  res.set({ "Allow-access-Allow-Origin": "*" });

  tutorial1 = async () => {
    res.set({ "Allow-access-Allow-Origin": "*" });
    const URL = `https://nairaland.com/trending`;

    const browser = await puppet.launch({ timeout: 0 });
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0);
    await page.goto(URL);
    let data = await page.evaluate(() => {
      let results = [];

      let items = document.querySelectorAll(".w b");
      items.forEach((item) => {
        results.push({
          url: item.getAttribute("href"),
          title: item.innerHTML,
        });
      });
      return results;
    });
    res.set({ "Allow-access-Allow-Origin": "*" });

    res.status(200).json(data.slice(1, 172));
    console.log(data);
    await browser.close();
  };
  tutorial1();
});

// app.get("/newsapi/:id?page", (req, res) => {

//   res.set({ "Allow-access-Allow-Origin": "*" })

//   let id = req.params.id;
//   let num = req.query.num;
//   newsapi.v2.everything({
//     q: `${id}`,

//     language: 'en',
//     sortBy: 'relevancy',
//     pageSize: 99
//   }).then(response => {
//     console.log(response);
//     res.json(response.articles.slice(num, 39))

//   });

// })

app.listen(PORT, () =>
  console.log(`check your array at ${PORT}`)
).keepAliveTimeout = 61 * 1000;
