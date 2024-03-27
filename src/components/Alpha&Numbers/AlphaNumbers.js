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
        "./alphaAssets/a/a1.jpg",
        "./alphaAssets/a/a2.avif",
        "./alphaAssets/a/a3.jpg",
        "./alphaAssets/a/a4.jpg",
        "./alphaAssets/a/a5.jpg",
        "./alphaAssets/a/a6.png",
        "./alphaAssets/a/a7.jpg",
        "./alphaAssets/a/a8.jpg",
        "./alphaAssets/a/a9.jpg",
        "./alphaAssets/a/a10.avif",
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
        "./alphaAssets/b/b1.png",
        "./alphaAssets/b/b2.jpeg",
        "./alphaAssets/b/b3.jpeg",
        "./alphaAssets/b/b4.avif",
        "./alphaAssets/b/b5.jpeg",
        "./alphaAssets/b/b6.jpeg",
        "./alphaAssets/b/b7.jpg",
        "./alphaAssets/b/b8.jpg",
        "./alphaAssets/b/b9.jpeg",
        "./alphaAssets/b/b10.jpg",
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
        "./alphaAssets/c/c1.jpg",
        "./alphaAssets/c/c2.png",
        "./alphaAssets/c/c3.jpeg",
        "./alphaAssets/c/c4.jpeg",
        "./alphaAssets/c/c5.jpeg",
        "./alphaAssets/c/c6.jpeg",
        "./alphaAssets/c/c7.jpeg",
        "./alphaAssets/c/c8.jpeg",
        "./alphaAssets/c/c9.jpg",
        "./alphaAssets/c/c10.jpeg",
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
        "./alphaAssets/d/d1.jpg",
        "./alphaAssets/d/d2.jpeg",
        "./alphaAssets/d/d3.jpeg",
        "./alphaAssets/d/d4.jpeg",
        "./alphaAssets/d/d5.jpeg",
        "./alphaAssets/d/d6.jpeg",
        "./alphaAssets/d/d7.jpeg",
        "./alphaAssets/d/d8.jpeg",
        "./alphaAssets/d/d9.jpeg",
        "./alphaAssets/d/d10.jpeg",
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
        "./alphaAssets/e/e1.jpg",
        "./alphaAssets/e/e2.jpeg",
        "./alphaAssets/e/e3.jpeg",
        "./alphaAssets/e/e4.jpeg",
        "./alphaAssets/e/e5.jpeg",
        "./alphaAssets/e/e6.jpeg",
        "./alphaAssets/e/e7.jpeg",
        "./alphaAssets/e/e8.jpeg",
        "./alphaAssets/e/e9.jpeg",
        "./alphaAssets/e/e10.jpeg",
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
        "./alphaAssets/f/f1.jpg",
        "./alphaAssets/f/f2.jpeg",
        "./alphaAssets/f/f3.jpeg",
        "./alphaAssets/f/f4.jpeg",
        "./alphaAssets/f/f5.jpeg",
        "./alphaAssets/f/f6.jpeg",
        "./alphaAssets/f/f7.webp",
        "./alphaAssets/f/f8.jpeg",
        "./alphaAssets/f/f9.jpeg",
        "./alphaAssets/f/f10.png",
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
        "./alphaAssets/g/g1.jpg",
        "./alphaAssets/g/g2.jpeg",
        "./alphaAssets/g/g3.jpeg",
        "./alphaAssets/g/g4.jpeg",
        "./alphaAssets/g/g5.jpeg",
        "./alphaAssets/g/g6.png",
        "./alphaAssets/g/g7.jpeg",
        "./alphaAssets/g/g8.jpeg",
        "./alphaAssets/g/g9.jpg",
        "./alphaAssets/g/g10.png",
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
        "./alphaAssets/h/h1.jpg",
        "./alphaAssets/h/h2.jpg",
        "./alphaAssets/h/h3.avif",
        "./alphaAssets/h/h4.webp",
        "./alphaAssets/h/h5.jpeg",
        "./alphaAssets/h/h6.avif",
        "./alphaAssets/h/h7.avif",
        "./alphaAssets/h/h8.jpeg",
        "./alphaAssets/h/h9.jpeg",
        "./alphaAssets/h/h10.avif",
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
        "./alphaAssets/i/i1.jpg",
        "./alphaAssets/i/i2.jpeg",
        "./alphaAssets/i/i3.jpeg",
        "./alphaAssets/i/i4.jpeg",
        "./alphaAssets/i/i5.jpeg",
        "./alphaAssets/i/i6.jpeg",
        "./alphaAssets/i/i7.jpeg",
        "./alphaAssets/i/i8.jpeg",
        "./alphaAssets/i/i9.jpeg",
        "./alphaAssets/i/i10.jpeg",
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
        "./alphaAssets/j/j1.jpg",
        "./alphaAssets/j/j2.jpeg",
        "./alphaAssets/j/j3.jpeg",
        "./alphaAssets/j/j4.jpeg",
        "./alphaAssets/j/j5.jpeg",
        "./alphaAssets/j/j6.jpeg",
        "./alphaAssets/j/j7.jpeg",
        "./alphaAssets/j/j8.jpeg",
        "./alphaAssets/j/j9.avif",
        "./alphaAssets/j/j10.jpeg",
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
        "./alphaAssets/k/k1.jpeg",
        "./alphaAssets/k/k2.jpeg",
        "./alphaAssets/k/k3.jpg",
        "./alphaAssets/k/k4.avif",
        "./alphaAssets/k/k5.jpeg",
        "./alphaAssets/k/k6.jpeg",
        "./alphaAssets/k/k7.jpeg",
        "./alphaAssets/k/k8.jpeg",
        "./alphaAssets/k/k9.jpeg",
        "./alphaAssets/k/k10.jpeg",
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
        "./alphaAssets/l/l1.jpg",
        "./alphaAssets/l/l2.jpeg",
        "./alphaAssets/l/l3.jpeg",
        "./alphaAssets/l/l4.jpeg",
        "./alphaAssets/l/l5.jpeg",
        "./alphaAssets/l/l6.webp",
        "./alphaAssets/l/l7.jpeg",
        "./alphaAssets/l/l8.png",
        "./alphaAssets/l/l9.jpeg",
        "./alphaAssets/l/l10.jpeg",
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
        "./alphaAssets/m/m1.jpg",
        "./alphaAssets/m/m2.webp",
        "./alphaAssets/m/m3.jpeg",
        "./alphaAssets/m/m4.jpeg",
        "./alphaAssets/m/m5.jpeg",
        "./alphaAssets/m/m6.jpeg",
        "./alphaAssets/m/m7.jpeg",
        "./alphaAssets/m/m8.jpeg",
        "./alphaAssets/m/m9.jpeg",
        "./alphaAssets/m/m10.jpeg",
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
        "./alphaAssets/n/n1.jpeg",
        "./alphaAssets/n/n2.jpeg",
        "./alphaAssets/n/n3.jpeg",
        "./alphaAssets/n/n4.jpeg",
        "./alphaAssets/n/n5.jpeg",
        "./alphaAssets/n/n6.jpg",
        "./alphaAssets/n/n7.jpeg",
        "./alphaAssets/n/n8.jpeg",
        "./alphaAssets/n/n9.jpeg",
        "./alphaAssets/n/n10.jpeg",
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
        "./alphaAssets/o/o1.jpg",
        "./alphaAssets/o/o2.jpeg",
        "./alphaAssets/o/o3.jpeg",
        "./alphaAssets/o/o4.jpeg",
        "./alphaAssets/o/o5.jpeg",
        "./alphaAssets/o/o6.jpeg",
        "./alphaAssets/o/o7.jpeg",
        "./alphaAssets/o/o8.jpeg",
        "./alphaAssets/o/o9.jpeg",
        "./alphaAssets/o/o10.jpeg",
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
        "./alphaAssets/p/p1.webp",
        "./alphaAssets/p/p2.jpeg",
        "./alphaAssets/p/p3.jpeg",
        "./alphaAssets/p/p4.jpeg",
        "./alphaAssets/p/p5.jpeg",
        "./alphaAssets/p/p6.jpeg",
        "./alphaAssets/p/p7.jpeg",
        "./alphaAssets/p/p8.jpeg",
        "./alphaAssets/p/p9.jpeg",
        "./alphaAssets/p/p10.jpeg",
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
        "./alphaAssets/q/q1.jpg",
        "./alphaAssets/q/q2.jpg",
        "./alphaAssets/q/q3.png",
        "./alphaAssets/q/q4.jpeg",
        "./alphaAssets/q/q5.jpeg",
        "./alphaAssets/q/q6.jpg",
        "./alphaAssets/q/q7.jpg",
        "./alphaAssets/q/q8.jpeg",
        "./alphaAssets/q/q9.jpeg",
        "./alphaAssets/q/q10.jpg",
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
        "./alphaAssets/r/r1.png",
        "./alphaAssets/r/r2.png",
        "./alphaAssets/r/r3.jpeg",
        "./alphaAssets/r/r4.jpeg",
        "./alphaAssets/r/r5.jpeg",
        "./alphaAssets/r/r6.jpeg",
        "./alphaAssets/r/r7.jpeg",
        "./alphaAssets/r/r8.jpeg",
        "./alphaAssets/r/r9.jpeg",
        "./alphaAssets/r/r10.jpeg",
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
        "./alphaAssets/s/s1.jpg",
        "./alphaAssets/s/s2.jpeg",
        "./alphaAssets/s/s3.png",
        "./alphaAssets/s/s4.jpeg",
        "./alphaAssets/s/s5.jpeg",
        "./alphaAssets/s/s6.jpeg",
        "./alphaAssets/s/s7.jpeg",
        "./alphaAssets/s/s8.jpeg",
        "./alphaAssets/s/s9.jpeg",
        "./alphaAssets/s/s10.jpeg",
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
        "./alphaAssets/t/t1.jpg",
        "./alphaAssets/t/t2.jpeg",
        "./alphaAssets/t/t3.jpeg",
        "./alphaAssets/t/t4.jpeg",
        "./alphaAssets/t/t5.jpeg",
        "./alphaAssets/t/t6.jpg",
        "./alphaAssets/t/t7.jpeg",
        "./alphaAssets/t/t8.jpeg",
        "./alphaAssets/t/t9.jpeg",
        "./alphaAssets/t/t10.jpeg",
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
        "./alphaAssets/u/u1.jpg",
        "./alphaAssets/u/u2.jpeg",
        "./alphaAssets/u/u3.png",
        "./alphaAssets/u/u4.jpeg",
        "./alphaAssets/u/u5.jpeg",
        "./alphaAssets/u/u6.jpeg",
        "./alphaAssets/u/u7.jpeg",
        "./alphaAssets/u/u8.jpeg",
        "./alphaAssets/u/u9.jpeg",
        "./alphaAssets/u/u10.jpeg",
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
        "./alphaAssets/v/v1.jpg",
        "./alphaAssets/v/v2.jpeg",
        "./alphaAssets/v/v3.jpeg",
        "./alphaAssets/v/v4.jpeg",
        "./alphaAssets/v/v5.jpeg",
        "./alphaAssets/v/v6.jpeg",
        "./alphaAssets/v/v7.jpeg",
        "./alphaAssets/v/v8.jpeg",
        "./alphaAssets/v/v9.jpeg",
        "./alphaAssets/v/v10.jpg",
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
        "./alphaAssets/w/w1.jpg",
        "./alphaAssets/w/w2.jpeg",
        "./alphaAssets/w/w3.jpeg",
        "./alphaAssets/w/w4.jpeg",
        "./alphaAssets/w/w5.jpeg",
        "./alphaAssets/w/w6.jpeg",
        "./alphaAssets/w/w7.jpeg",
        "./alphaAssets/w/w8.jpeg",
        "./alphaAssets/w/w9.jpeg",
        "./alphaAssets/w/w10.jpeg",
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
        "./alphaAssets/x/x1.jpg",
        "./alphaAssets/x/x2.jpeg",
        "./alphaAssets/x/x3.jpeg",
        "./alphaAssets/x/x4.jpeg",
        "./alphaAssets/x/x5.jpeg",
        "./alphaAssets/x/x6.jpeg",
        "./alphaAssets/x/x7.jpeg",
        "./alphaAssets/x/x8.jpeg",
        "./alphaAssets/x/x9.jpeg",
        "./alphaAssets/x/x10.jpeg",
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
        "./alphaAssets/y/y1.jpg",
        "./alphaAssets/y/y2.jpeg",
        "./alphaAssets/y/y3.jpeg",
        "./alphaAssets/y/y4.jpeg",
        "./alphaAssets/y/y5.jpeg",
        "./alphaAssets/y/y6.png",
        "./alphaAssets/y/y7.jpeg",
        "./alphaAssets/y/y8.jpeg",
        "./alphaAssets/y/y9.jpeg",
        "./alphaAssets/y/y10.jpeg",
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
        "./alphaAssets/z/z1.jpg",
        "./alphaAssets/z/z2.jpeg",
        "./alphaAssets/z/z3.jpeg",
        "./alphaAssets/z/z4.jpeg",
        "./alphaAssets/z/z5.jpeg",
        "./alphaAssets/z/z6.jpeg",
        "./alphaAssets/z/z7.jpeg",
        "./alphaAssets/z/z8.jpeg",
        "./alphaAssets/z/z9.jpeg",
        "./alphaAssets/z/z10.jpeg",
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
          backgroundImage: "url('./alphaAssets/BG.jpeg')",
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
              src="./alphaAssets/Alphabet.png"
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
