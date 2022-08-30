import { useEffect } from "react";
import { useState } from "react";
import {useRef} from "react";
import Tesseract from "tesseract.js";
import axios from "axios";
import styles from "./ocr.module.css";

function App() {
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState("eng");
  const [result, setResult] = useState([]);
  const [meds, setMeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const showImage = () => {
  //   img = webRef.current.getScreenshot();
  // };

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const processImage = () => {
    setResult([" "]);
    setProgress(0);
    Tesseract.recognize(file, language, {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(m.progress);
        }
      },
    }).then(({ data: { text } }) => {
      setResult(text);
      setSearchTerm(text);
    });
  };

  useEffect(() => {
    const getMeds = async () => {
      try {
        const res = await axios.get("/medData");
        setMeds(res.data);
      } catch (err) {
        console.log("err");
      }
    };
    getMeds();
  }, [meds]);

  return (
    <>
      <div className={styles.App}>
        <form className="row domain-search bg-pblue" />
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p className={styles.textSearch}>
                Search Substances
              </p>
            </div>
            <div className="col-md-9">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search medicines or products!"
                  className={styles.searchInput}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <button className={styles.btn}>Search</button>
              </div>
              {meds
                .filter((val) => {
                  if (searchTerm === "") return "";
                  console.log(val);
                  if (val.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    return val;
                  // else return "";
                  // else return {
                  //   name: "This ingredient/medicine is not prohibited",
                  //   para1: "",
                  //   para2: ""
                  // }
                })
                .map((val, key) => {
                  return (
                        <div  className={styles.ocr} key={key}>
                          <p ><u>{val.name}</u></p>
                          <p className={styles.para1}><em>{val.type}</em></p>
                          <p className={styles.para2}><em>{val.note}</em></p>
                        </div>
                      );
                  })}
            </div>
          </div>
        </div> 

        <div className={styles.fileselecter}>
          <h3 className={styles.title}>Have images?? No Worries</h3>
          <p className={styles.text}>Please enter your scanned image</p>
          <input type="file" onChange={onFileChange} />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className={styles.select}
          >
            <option value="eng">English</option>
            <option value="tel">Telugu</option>
            <option value="tamil">Tamil</option>
            <option value="malyalam">Malyalam</option>
            <option value="hin">Hindi</option>
            <option value="kan">Kannada</option>
          </select>
                <a
                  className="nav-link active"
                  // href="C:\Users\ashis\Desktop\ocr camera\JS-OCR-demo\index.html"
                  href="file:///E:/bit_rebels/ocr%20camera/JS-OCR-demo/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                className="btn btn-secondary"
                type="submit"
              >
                Click Photo
              </button>
                </a>
          <div style={{ marginTop: 25 }}>
            <input
              type="submit"
              value="Submit"
              onClick={processImage}
              className={styles.btn1}
            />
          <div style={{ marginTop: 50 }}>
            {/*<progress style={{ marginLeft:360 }} value={progress} max={1} />*/}
          </div>
          {result !== "" && (
            <div style={{ marginTop: 60, fontSize: 20 }}>Result: {result}</div>
          )}
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
