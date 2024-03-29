import React, { useState } from "react";
import "./Alphanumber.css";

const SpeakOut = () => {
  const [outputText, setOutputText] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [imgu, setImg] = useState("");
  const [startClicked, setStartClicked] = useState(false); // State to track if start button is clicked

  const wordDictionary = {
    A: {
      word: [
        "Apple",
        "Ant",
        "Arm",
        "Acorn",
        "Airplane",
        "Anchor",
        "Art",
        "Axe",
        "Angel",
        "Animals",
      ],
      image: [
        "./images/alphaAssets/a/a1.jpg",
        "./images/alphaAssets/a/a2.avif",
        "./images/alphaAssets/a/a3.jpg",
        "./images/alphaAssets/a/a4.jpg",
        "./images/alphaAssets/a/a5.jpg",
        "./images/alphaAssets/a/a6.png",
        "./images/alphaAssets/a/a7.jpg",
        "./images/alphaAssets/a/a8.jpg",
        "./images/alphaAssets/a/a9.jpg",
        "./images/alphaAssets/a/a10.avif",
      ],
    },
    B: {
      word: [
        "Banana",
        "Ball",
        "Bear",
        "Bee",
        "Bird",
        "Book",
        "Box",
        "Butterfly",
        "Baby",
        "Balloon",
      ],
      image: [
        "./images/alphaAssets/b/b1.png",
        "./images/alphaAssets/b/b2.jpeg",
        "./images/alphaAssets/b/b3.jpeg",
        "./images/alphaAssets/b/b4.avif",
        "./images/alphaAssets/b/b5.jpeg",
        "./images/alphaAssets/b/b6.jpeg",
        "./images/alphaAssets/b/b7.jpg",
        "./images/alphaAssets/b/b8.jpg",
        "./images/alphaAssets/b/b9.jpeg",
        "./images/alphaAssets/b/b10.jpg",
      ],
    },
    C: {
      word: [
        "Cat",
        "Car",
        "Cake",
        "Cookie",
        "Cup",
        "Cow",
        "Cloud",
        "Chair",
        "Clock",
        "Crayon",
      ],
      image: [
        "./images/alphaAssets/c/c1.jpg",
        "./images/alphaAssets/c/c2.png",
        "./images/alphaAssets/c/c3.jpeg",
        "./images/alphaAssets/c/c4.jpeg",
        "./images/alphaAssets/c/c5.jpeg",
        "./images/alphaAssets/c/c6.jpeg",
        "./images/alphaAssets/c/c7.jpeg",
        "./images/alphaAssets/c/c8.jpeg",
        "./images/alphaAssets/c/c9.jpg",
        "./images/alphaAssets/c/c10.jpeg",
      ],
    },
    D: {
      word: [
        "Dog",
        "Duck",
        "Dinosaur",
        "Door",
        "Dress",
        "Dolphin",
        "Dragon",
        "Diamond",
        "Drum",
        "Duckling",
      ],
      image: [
        "./images/alphaAssets/d/d1.jpg",
        "./images/alphaAssets/d/d2.jpeg",
        "./images/alphaAssets/d/d3.jpeg",
        "./images/alphaAssets/d/d4.jpeg",
        "./images/alphaAssets/d/d5.jpeg",
        "./images/alphaAssets/d/d6.jpeg",
        "./images/alphaAssets/d/d7.jpeg",
        "./images/alphaAssets/d/d8.jpeg",
        "./images/alphaAssets/d/d9.jpeg",
        "./images/alphaAssets/d/d10.jpeg",
      ],
    },
    E: {
      word: [
        "Elephant",
        "Egg",
        "Eye",
        "Eagle",
        "Earth",
        "Elbow",
        "Engine",
        "Envelope",
        "Elf",
        "Emerald",
      ],
      image: [
        "./images/alphaAssets/e/e1.jpg",
        "./images/alphaAssets/e/e2.jpeg",
        "./images/alphaAssets/e/e3.jpeg",
        "./images/alphaAssets/e/e4.jpeg",
        "./images/alphaAssets/e/e5.jpeg",
        "./images/alphaAssets/e/e6.jpeg",
        "./images/alphaAssets/e/e7.jpeg",
        "./images/alphaAssets/e/e8.jpeg",
        "./images/alphaAssets/e/e9.jpeg",
        "./images/alphaAssets/e/e10.jpeg",
      ],
    },
    F: {
      word: [
        "Fish",
        "Fox",
        "Frog",
        "Flower",
        "Fire",
        "Fan",
        "Flag",
        "Feather",
        "Foot",
        "Fruit",
      ],
      image: [
        "./images/alphaAssets/f/f1.jpg",
        "./images/alphaAssets/f/f2.jpeg",
        "./images/alphaAssets/f/f3.jpeg",
        "./images/alphaAssets/f/f4.jpeg",
        "./images/alphaAssets/f/f5.jpeg",
        "./images/alphaAssets/f/f6.jpeg",
        "./images/alphaAssets/f/f7.webp",
        "./images/alphaAssets/f/f8.jpeg",
        "./images/alphaAssets/f/f9.jpeg",
        "./images/alphaAssets/f/f10.png",
      ],
    },
    G: {
      word: [
        "Giraffe",
        "Goat",
        "Globe",
        "Grass",
        "Ghost",
        "Guitar",
        "Gate",
        "Gift",
        "Glasses",
        "Gumball",
      ],
      image: [
        "./images/alphaAssets/g/g1.jpg",
        "./images/alphaAssets/g/g2.jpeg",
        "./images/alphaAssets/g/g3.jpeg",
        "./images/alphaAssets/g/g4.jpeg",
        "./images/alphaAssets/g/g5.jpeg",
        "./images/alphaAssets/g/g6.png",
        "./images/alphaAssets/g/g7.jpeg",
        "./images/alphaAssets/g/g8.jpeg",
        "./images/alphaAssets/g/g9.jpg",
        "./images/alphaAssets/g/g10.png",
      ],
    },
    H: {
      word: [
        "Horse",
        "House",
        "Hat",
        "Heart",
        "Hand",
        "Hammer",
        "Hippo",
        "Helicopter",
        "Honey",
        "Horn",
      ],
      image: [
        "./images/alphaAssets/h/h1.jpg",
        "./images/alphaAssets/h/h2.jpg",
        "./images/alphaAssets/h/h3.avif",
        "./images/alphaAssets/h/h4.webp",
        "./images/alphaAssets/h/h5.jpeg",
        "./images/alphaAssets/h/h6.avif",
        "./images/alphaAssets/h/h7.avif",
        "./images/alphaAssets/h/h8.jpeg",
        "./images/alphaAssets/h/h9.jpeg",
        "./images/alphaAssets/h/h10.avif",
      ],
    },
    I: {
      word: [
        "Ice cream",
        "Igloo",
        "Island",
        "Insect",
        "Idea",
        "Iron",
        "Ivy",
        "Ice",
        "Iglet",
        "Ink",
      ],
      image: [
        "./images/alphaAssets/i/i1.jpg",
        "./images/alphaAssets/i/i2.jpeg",
        "./images/alphaAssets/i/i3.jpeg",
        "./images/alphaAssets/i/i4.jpeg",
        "./images/alphaAssets/i/i5.jpeg",
        "./images/alphaAssets/i/i6.jpeg",
        "./images/alphaAssets/i/i7.jpeg",
        "./images/alphaAssets/i/i8.jpeg",
        "./images/alphaAssets/i/i9.jpeg",
        "./images/alphaAssets/i/i10.jpeg",
      ],
    },
    J: {
      word: [
        "Jellyfish",
        "Jet",
        "Jacket",
        "Jar",
        "Jam",
        "Jigsaw",
        "Jaguar",
        "Jewel",
        "Jump",
        "Juice",
      ],
      image: [
        "./images/alphaAssets/j/j1.jpg",
        "./images/alphaAssets/j/j2.jpeg",
        "./images/alphaAssets/j/j3.jpeg",
        "./images/alphaAssets/j/j4.jpeg",
        "./images/alphaAssets/j/j5.jpeg",
        "./images/alphaAssets/j/j6.jpeg",
        "./images/alphaAssets/j/j7.jpeg",
        "./images/alphaAssets/j/j8.jpeg",
        "./images/alphaAssets/j/j9.avif",
        "./images/alphaAssets/j/j10.jpeg",
      ],
    },
    K: {
      word: [
        "Kangaroo",
        "Kite",
        "Key",
        "King",
        "Koala",
        "Kiwi",
        "Kettle",
        "Knight",
        "Kitten",
        "Ketchup",
      ],
      image: [
        "./images/alphaAssets/k/k1.jpeg",
        "./images/alphaAssets/k/k2.jpeg",
        "./images/alphaAssets/k/k3.jpg",
        "./images/alphaAssets/k/k4.avif",
        "./images/alphaAssets/k/k5.jpeg",
        "./images/alphaAssets/k/k6.jpeg",
        "./images/alphaAssets/k/k7.jpeg",
        "./images/alphaAssets/k/k8.jpeg",
        "./images/alphaAssets/k/k9.jpeg",
        "./images/alphaAssets/k/k10.jpeg",
      ],
    },
    L: {
      word: [
        "Lion",
        "Lamp",
        "Leaf",
        "Lemon",
        "Lizard",
        "Lock",
        "Ladybug",
        "Lollipop",
        "Ladder",
        "Lunchbox",
      ],
      image: [
        "./images/alphaAssets/l/l1.jpg",
        "./images/alphaAssets/l/l2.jpeg",
        "./images/alphaAssets/l/l3.jpeg",
        "./images/alphaAssets/l/l4.jpeg",
        "./images/alphaAssets/l/l5.jpeg",
        "./images/alphaAssets/l/l6.webp",
        "./images/alphaAssets/l/l7.jpeg",
        "./images/alphaAssets/l/l8.png",
        "./images/alphaAssets/l/l9.jpeg",
        "./images/alphaAssets/l/l10.jpeg",
      ],
    },
    M: {
      word: [
        "Monkey",
        "Moon",
        "Milk",
        "Mouse",
        "Mountain",
        "Muffin",
        "Magnet",
        "Mask",
        "Mermaid",
        "Map",
      ],
      image: [
        "./images/alphaAssets/m/m1.jpg",
        "./images/alphaAssets/m/m2.webp",
        "./images/alphaAssets/m/m3.jpeg",
        "./images/alphaAssets/m/m4.jpeg",
        "./images/alphaAssets/m/m5.jpeg",
        "./images/alphaAssets/m/m6.jpeg",
        "./images/alphaAssets/m/m7.jpeg",
        "./images/alphaAssets/m/m8.jpeg",
        "./images/alphaAssets/m/m9.jpeg",
        "./images/alphaAssets/m/m10.jpeg",
      ],
    },
    N: {
      word: [
        "Nose",
        "Net",
        "Nest",
        "Nut",
        "Ninja",
        "Notebook",
        "Necklace",
        "Newt",
        "Nail",
        "Noodle",
      ],
      image: [
        "./images/alphaAssets/n/n1.jpeg",
        "./images/alphaAssets/n/n2.jpeg",
        "./images/alphaAssets/n/n3.jpeg",
        "./images/alphaAssets/n/n4.jpeg",
        "./images/alphaAssets/n/n5.jpeg",
        "./images/alphaAssets/n/n6.jpg",
        "./images/alphaAssets/n/n7.jpeg",
        "./images/alphaAssets/n/n8.jpeg",
        "./images/alphaAssets/n/n9.jpeg",
        "./images/alphaAssets/n/n10.jpeg",
      ],
    },
    O: {
      word: [
        "Owl",
        "Orange",
        "Octopus",
        "Ocean",
        "Omelette",
        "Onion",
        "Orchid",
        "Oar",
        "Oyster",
        "Otter",
      ],
      image: [
        "./images/alphaAssets/o/o1.jpg",
        "./images/alphaAssets/o/o2.jpeg",
        "./images/alphaAssets/o/o3.jpeg",
        "./images/alphaAssets/o/o4.jpeg",
        "./images/alphaAssets/o/o5.jpeg",
        "./images/alphaAssets/o/o6.jpeg",
        "./images/alphaAssets/o/o7.jpeg",
        "./images/alphaAssets/o/o8.jpeg",
        "./images/alphaAssets/o/o9.jpeg",
        "./images/alphaAssets/o/o10.jpeg",
      ],
    },
    P: {
      word: [
        "Parrot",
        "Panda",
        "Pizza",
        "Penguin",
        "Piano",
        "Pencil",
        "Pear",
        "Pumpkin",
        "Pilot",
        "Puzzle",
      ],
      image: [
        "./images/alphaAssets/p/p1.webp",
        "./images/alphaAssets/p/p2.jpeg",
        "./images/alphaAssets/p/p3.jpeg",
        "./images/alphaAssets/p/p4.jpeg",
        "./images/alphaAssets/p/p5.jpeg",
        "./images/alphaAssets/p/p6.jpeg",
        "./images/alphaAssets/p/p7.jpeg",
        "./images/alphaAssets/p/p8.jpeg",
        "./images/alphaAssets/p/p9.jpeg",
        "./images/alphaAssets/p/p10.jpeg",
      ],
    },
    Q: {
      word: [
        "Queen",
        "Quiet",
        "Question",
        "Quick",
        "QR code",
        "Quiz",
        "Quote",
        "Quartz",
        "Quail",
        "Quarter",
      ],
      image: [
        "./images/alphaAssets/q/q1.jpg",
        "./images/alphaAssets/q/q2.jpg",
        "./images/alphaAssets/q/q3.png",
        "./images/alphaAssets/q/q4.jpeg",
        "./images/alphaAssets/q/q5.jpeg",
        "./images/alphaAssets/q/q6.jpg",
        "./images/alphaAssets/q/q7.jpg",
        "./images/alphaAssets/q/q8.jpeg",
        "./images/alphaAssets/q/q9.jpeg",
        "./images/alphaAssets/q/q10.jpg",
      ],
    },
    R: {
      word: [
        "Rabbit",
        "Rainbow",
        "Rocket",
        "Robot",
        "Ring",
        "Raccoon",
        "Rose",
        "Ruler",
        "Radio",
        "Raincoat",
      ],
      image: [
        "./images/alphaAssets/r/r1.png",
        "./images/alphaAssets/r/r2.png",
        "./images/alphaAssets/r/r3.jpeg",
        "./images/alphaAssets/r/r4.jpeg",
        "./images/alphaAssets/r/r5.jpeg",
        "./images/alphaAssets/r/r6.jpeg",
        "./images/alphaAssets/r/r7.jpeg",
        "./images/alphaAssets/r/r8.jpeg",
        "./images/alphaAssets/r/r9.jpeg",
        "./images/alphaAssets/r/r10.jpeg",
      ],
    },
    S: {
      word: [
        "Snake",
        "Star",
        "Sun",
        "Spider",
        "Socks",
        "Sailboat",
        "Sandcastle",
        "Scissors",
        "Seahorse",
        "Ship",
      ],
      image: [
        "./images/alphaAssets/s/s1.jpg",
        "./images/alphaAssets/s/s2.jpeg",
        "./images/alphaAssets/s/s3.png",
        "./images/alphaAssets/s/s4.jpeg",
        "./images/alphaAssets/s/s5.jpeg",
        "./images/alphaAssets/s/s6.jpeg",
        "./images/alphaAssets/s/s7.jpeg",
        "./images/alphaAssets/s/s8.jpeg",
        "./images/alphaAssets/s/s9.jpeg",
        "./images/alphaAssets/s/s10.jpeg",
      ],
    },
    T: {
      word: [
        "Tiger",
        "Tree",
        "Train",
        "Turtle",
        "Teapot",
        "Tooth",
        "Tomato",
        "Teddy bear",
        "Tulip",
        "Truck",
      ],
      image: [
        "./images/alphaAssets/t/t1.jpg",
        "./images/alphaAssets/t/t2.jpeg",
        "./images/alphaAssets/t/t3.jpeg",
        "./images/alphaAssets/t/t4.jpeg",
        "./images/alphaAssets/t/t5.jpeg",
        "./images/alphaAssets/t/t6.jpg",
        "./images/alphaAssets/t/t7.jpeg",
        "./images/alphaAssets/t/t8.jpeg",
        "./images/alphaAssets/t/t9.jpeg",
        "./images/alphaAssets/t/t10.jpeg",
      ],
    },
    U: {
      word: [
        "Umbrella",
        "Unicorn",
        "Up",
        "Underwear",
        "Utensils",
        "Uniform",
        "UFO",
        "Umpire",
        "Unicycle",
        "Urchin",
      ],
      image: [
        "./images/alphaAssets/u/u1.jpg",
        "./images/alphaAssets/u/u2.jpeg",
        "./images/alphaAssets/u/u3.png",
        "./images/alphaAssets/u/u4.jpeg",
        "./images/alphaAssets/u/u5.jpeg",
        "./images/alphaAssets/u/u6.jpeg",
        "./images/alphaAssets/u/u7.jpeg",
        "./images/alphaAssets/u/u8.jpeg",
        "./images/alphaAssets/u/u9.jpeg",
        "./images/alphaAssets/u/u10.jpeg",
      ],
    },
    V: {
      word: [
        "Volcano",
        "Violin",
        "Van",
        "Vase",
        "Vest",
        "Vegetable",
        "Volleyball",
        "Vulture",
        "Vacuum",
        "Vote",
      ],
      image: [
        "./images/alphaAssets/v/v1.jpg",
        "./images/alphaAssets/v/v2.jpeg",
        "./images/alphaAssets/v/v3.jpeg",
        "./images/alphaAssets/v/v4.jpeg",
        "./images/alphaAssets/v/v5.jpeg",
        "./images/alphaAssets/v/v6.jpeg",
        "./images/alphaAssets/v/v7.jpeg",
        "./images/alphaAssets/v/v8.jpeg",
        "./images/alphaAssets/v/v9.jpeg",
        "./images/alphaAssets/v/v10.jpg",
      ],
    },
    W: {
      word: [
        "Whale",
        "Watermelon",
        "Wagon",
        "Watch",
        "Wand",
        "Walrus",
        "Window",
        "Wig",
        "Waffle",
        "Worm",
      ],
      image: [
        "./images/alphaAssets/w/w1.jpg",
        "./images/alphaAssets/w/w2.jpeg",
        "./images/alphaAssets/w/w3.jpeg",
        "./images/alphaAssets/w/w4.jpeg",
        "./images/alphaAssets/w/w5.jpeg",
        "./images/alphaAssets/w/w6.jpeg",
        "./images/alphaAssets/w/w7.jpeg",
        "./images/alphaAssets/w/w8.jpeg",
        "./images/alphaAssets/w/w9.jpeg",
        "./images/alphaAssets/w/w10.jpeg",
      ],
    },
    X: {
      word: [
        "Xylophone",
        "X-ray",
        "Xbox",
        "Xerox",
        "Xenon",
        "Xmas",
        "Xylograph",
        "Xenopus",
        "Xeranthemum",
        "Xiphias",
      ],
      image: [
        "./images/alphaAssets/x/x1.jpg",
        "./images/alphaAssets/x/x2.jpeg",
        "./images/alphaAssets/x/x3.jpeg",
        "./images/alphaAssets/x/x4.jpeg",
        "./images/alphaAssets/x/x5.jpeg",
        "./images/alphaAssets/x/x6.jpeg",
        "./images/alphaAssets/x/x7.jpeg",
        "./images/alphaAssets/x/x8.jpeg",
        "./images/alphaAssets/x/x9.jpeg",
        "./images/alphaAssets/x/x10.jpeg",
      ],
    },
    Y: {
      word: [
        "Yak",
        "Yarn",
        "Yacht",
        "Yo-yo",
        "Yolk",
        "Yellow",
        "Yawn",
        "Yard",
        "Yogurt",
        "Yeti",
      ],
      image: [
        "./images/alphaAssets/y/y1.jpg",
        "./images/alphaAssets/y/y2.jpeg",
        "./images/alphaAssets/y/y3.jpeg",
        "./images/alphaAssets/y/y4.jpeg",
        "./images/alphaAssets/y/y5.jpeg",
        "./images/alphaAssets/y/y6.png",
        "./images/alphaAssets/y/y7.jpeg",
        "./images/alphaAssets/y/y8.jpeg",
        "./images/alphaAssets/y/y9.jpeg",
        "./images/alphaAssets/y/y10.jpeg",
      ],
    },
    Z: {
      word: [
        "Zebra",
        "Zoo",
        "Zipper",
        "Zigzag",
        "Zombie",
        "Zoom",
        "Zephyr",
        "Zucchini",
        "Zenith",
        "Zero",
      ],
      image: [
        "./images/alphaAssets/z/z1.jpg",
        "./images/alphaAssets/z/z2.jpeg",
        "./images/alphaAssets/z/z3.jpeg",
        "./images/alphaAssets/z/z4.jpeg",
        "./images/alphaAssets/z/z5.jpeg",
        "./images/alphaAssets/z/z6.jpeg",
        "./images/alphaAssets/z/z7.jpeg",
        "./images/alphaAssets/z/z8.jpeg",
        "./images/alphaAssets/z/z9.jpeg",
        "./images/alphaAssets/z/z10.jpeg",
      ],
    },
  };

  const speakOut = (alphabet) => {
    const input = alphabet.toUpperCase();
    let output = "";
    const randomNumber = Math.floor(Math.random() * 10);
    if (wordDictionary.hasOwnProperty(input)) {
      const entry = wordDictionary[input];
      const { word, image } = wordDictionary[input];
      output = `${input} for ${entry.word[randomNumber]}`;
      setOutputText(word[randomNumber]);
      setImg(image[randomNumber]);
      setShowImage(true);
    } else {
      alert("Please enter a valid alphabet");
      return;
    }

    // Speak the output
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(output);
    utterance.pitch = 0; // 0 to 2
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  const alphabetList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <>
      <div
        style={{
          backgroundImage: "url('./images/alphaAssets/BG.jpeg')",
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        {!startClicked ? (
          <div
            style={{
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="./images/alphaAssets/Alphabet.png"
              alt="#"
              className="gameName-img"
            />
            <button onClick={() => setStartClicked(true)} className="playBtn">
              Play
            </button>
          </div>
        ) : (
          <div className="alphabetsContainer">
            <div className="alphabetsCon">
              <div className="alphabet-buttons">
                {alphabetList.map((alphabet) => (
                  <button
                    key={alphabet}
                    onClick={() => speakOut(alphabet)}
                    className="glow-button"
                  >
                    {alphabet}
                  </button>
                ))}
              </div>
              {showImage && (
                <div className="showContainer">
                  <p className="alpha-fullname">{outputText.toUpperCase()}</p>
                  <div>
                    <img src={imgu} alt={outputText} className="alpha-img" />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SpeakOut;
