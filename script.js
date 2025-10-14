// Visited locations tracking
let visitedLocations = new Set();

// Check if all locations have been visited
function allLocationsVisited() {
  return visitedLocations.size === locations.length;
}

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the intro experience
  initIntro();
});

// Manhattan coordinates (center point)
const manhattanCenter = [40.7589, -73.9851];

// 9 locations from the Dear Photograph project
const locations = [
  {
    name: "9/11 Memorial Pool - 2014",
    coordinates: [40.7113, -74.013],
    description:
      "When I had to find the exact spot where this was taken, I realized I needed to match up the names on the plaques I saw in the photograph. So I started circling the North Pool, slowly. It was scorching hot this day in October - there was hardly any shade in that area. One circle around and I could already feel a tan coming. No luck. None of the buildings in the background also matched what was in the photo. I figured I should try the South Pool.\n\nAnd it was almost like I instantly knew this was the right one. When I walked towards the South Pool, I saw it - the twinkling of lights in the distance, just like in the photo. I found the exact spot pretty quickly after that.\n\nI stood there for a while, still sweating under the unforgiving sun, listening to the endless gush of water down into what felt like a much larger pool than I remembered. Tourists were mingling all around me. I kept looking around, hoping something would trigger a memory of this exact moment when the photograph was taken - nothing.\n\nI stood there a little longer. It was an area of such solemnity and grimness, a cold reminder of what this place holds, but I was also lost for a moment in my own head, trying really hard to think back to what I could have been doing when I was in that exact spot. Where my family and I might have just come from to get here. What we were talking about. What I, as a child back then, might have been thinking as I stood here taking this photo.",
  },
  {
    name: "Madison Square Park - 2011",
    coordinates: [40.7415, -73.9876],
    description:
      "I thought finding this sign was going to be easy. I mean - how many park signs can there be in a small park? But I ended up circling the place twice before I realized: sometime in the past fourteen years, they'd changed the signs. This old one just doesn't exist anymore. The buildings in the back of the photo were so blurry I couldn't make out which corner gate the picture was taken at either. Eventually I just chose the spot that seemed to match best - or maybe I was just tired by that point and wanted to just find something to say that this was it.\n\nIt was interesting, though, seeing how green everything was. The grass, the trees - all lush with summer bleeding into fall. The photograph showed piles of snow at the bottom of the gates, creeping upward on the metal, and balding trees. Such a stark difference.\n\nThere was a music event happening in the park that day I visited - you can hear it in the background. I stood there trying to see if anything would trigger some memory of having been here before. Trying to pull up even the smallest detail of fifteen-year-old me walking past this exact spot.\n\nNothing came up. All I could do was snap the picture, stand there for a moment taking it in - present me visiting a place that past me had walked right by - and then leave shortly after. I felt a little disappointed, I guess. Like I'd expected more from the moment than just… standing there.",
  },
  {
    name: "Empire State Building - 2011",
    coordinates: [40.7456, -73.9877],
    description:
      "I knew when I chose this picture that it was going to be one of the harder ones. The photo shows my sister and I grinning in the shadows, with the iconic Empire State Building in the back - almost blindingly invisible in the harsh light that day. But there was nothing else in the frame that told me which street this was, or how far away from the building we'd been standing.\n\nSo I started at the Empire State Building on 34th Street and slowly walked in the direction of the setting sun. That seemed more likely - my family usually did activities later in the day rather than earlier. I'd cross the street, turn around, check if the buildings matched, see if the Empire State still peeked through the center. I made it all the way to 29th Street before I looked back and thought, okay, maybe this is it.\n\nThe key thing was that in the photo, we were definitely standing across from an open plot of land, sandwiched between two older red brick buildings. It wasn't until 29th that I found what looked like an open construction site. But there's no way this same plot has been barren and under construction for fourteen years, right?\n\nStill, after passing five streets, I figured this was probably the best match I'd find. So I stood there, trying to think about what fifteen-year-old me could've been thinking in this exact moment. Did I even know Koreatown was nearby? Good Korean food? Oh wait - back then I used to hate Asian food. I'd grown up eating it so much that whenever we got \"Western\" food, I'd gobble my whole plate clean. Asian food? I'd pick at it, barely have an appetite.\n\nFunny how completely that's flipped after moving to the US and living here for almost ten years now.",
  },
  {
    name: "Grand Central Terminal - 2014",
    coordinates: [40.7528, -73.9771],
    description:
      "I didn't have much trouble finding where I'd been standing for this one. The photo gave it away - the placement of the terminal screens, the distant pillars, the circular help desk in the middle. But what caught me off guard was realizing just how far back I'd been. I was almost pressed against the very corner of Grand Central, camera lifted, trying to fit everything into the frame. I must've been completely mesmerized by the space (honestly, I still am), wanting to hold onto every bit of its grandeur in one shot.\n\nIt was Christmas when we visited - you can tell from the wreaths wrapped around the pillars, glinting faintly in the lights. Standing there now, in the middle of an ordinary October afternoon, it feels almost like a different place entirely.",
  },
  {
    name: "Times Square - 2014",
    coordinates: [40.7588, -73.9852],
    description:
      "I had to mentally prepare myself before heading to Times Square for this one. There’s this kind of sensory chaos there that never fails to hit all at once. Once I got there, it didn't take long to find the exact spot. The George M. Cohan statue gave it away immediately.\n\nWhat I wanted to know was if the landlines in the old photo are still there. I've been to Times Square so many times since then, and something told me those couldn't possibly still be there. Sure enough, they're gone - a small but significant indicator of how much time has passed since that picture was taken 11 years ago. The billboards, too, have all changed. You can see massive screen in the back of the old photo promoting Disney's Into the Woods. Now, the same space flashes an ad for Paramount+. It's fascinating seeing what once captured everyone's attention and what does now.\n\nI remember spinning around in circles at that exact spot, completely entranced by the lights cutting through the night. That feeling of wow, I've seen this place in movies - and I'm actually here. Standing there again, a year into living in New York, I couldn't help but laugh a little. I actively avoid Times Square now - it's just too much stimulation - but being there reminded me how wide-eyed I'd been when I first moved to the U.S. People often talk about culture shock when moving abroad. For me, it wasn't about the culture itself - it was realizing how different America feels when you're a local, not a tourist.",
  },
  {
    name: "Rockefeller Center - 2014",
    coordinates: [40.7588, -73.9783],
    description:
      "I remember the Rockefeller ice skating rink being so crowded that day - holiday music echoing through the plaza, the massive Christmas tree towering above, and everyone eager to take a turn on that tiny patch of ice. My sisters and I were among them, of course. But it was freezing, and the line stretched endlessly. So instead, we joined the crowd gathered around the rink, watching lucky skaters glide by. We were a little disappointed we couldn't skate ourselves, but at least we could say we'd been there - at the Rockefeller Center we'd always seen in movies.\n\nI was also completely captivated by the golden Prometheus statue presiding over the rink. I remember thinking how beautiful the whole area was - the buildings, the sculptures, the architecture. I've always been drawn to Roman influences, and you can really feel that presence here more than in most parts of Manhattan. I must've looked every bit the starry-eyed tourist, taking it all in.\n\nWalking through the same plaza now, though, I found myself looking around and wondering, how much would rent here cost?",
  },
  {
    name: "Radio City Music Hall - 2011",
    coordinates: [40.7594, -73.9809],
    description:
      "This picture feels a little more special to me. Back then, it was just an innocent snapshot of a busy Manhattan street, with Radio City Music Hall glowing faintly in the distance. What fifteen-year-old me didn't realize was that I was unknowingly capturing the very spot where I'd be graduating from NYU more than a decade later. It's funny how life works like that - how places can quietly hold meaning you only recognize years afterward. What once was just another photo of the city now feels like a small time capsule, a reminder of how different everything looks when you're standing in a new chapter of your life, with new priorities, new worries, new dreams.\n\nIn the old photo, the street was full of holiday crowds, people bundled up and moving quickly under the city lights. When I went back, I noticed how much had changed - street peddlers and food carts now lined the sidewalks, making it impossible to get quite the same clear shot. But I didn't mind. It felt like yet another quiet sign of time passing, of how the city keeps shifting, even when you're not looking.",
  },
  {
    name: "American Museum of Natural History - 2011/ 2014",
    coordinates: [40.7813, -73.9739],
    description:
      "This museum is special to me because it was the first and only museum I visited both times my family came to NYC, in 2011 and 2014. Night at the Museum was huge back then, one of our family's favorite movies. When we found out it was filmed here, we got so excited at the idea of seeing the same exhibition pieces that came to life in the movie standing right in front of us.\n\nFinding these spots were easy. But standing there, I had that same strange sensation I'd felt at the other locations. Why does this place feel so familiar and yet so unknown at the same time?\n\nI remember being jostled around by crowds when I visited before. But today, on this random October afternoon, it was quiet. I could walk to these spots without cutting through thick masses of people.\n\nI noticed that compared to other museums, the exhibitions here have stayed the same. But they give me a different sense of awe now — an adult appreciation for how things have evolved over time. As a child, these probably just looked cool because they were big. Would I have cared about time the way I do now? Even the picture of my family standing outside in that little floral garden at the side entrance — I thought the trees would've overgrown by now, or the flowers would've changed. But everything was the same. The colors, the types of flowers, even the way the tree branch stretched over our heads.\n\nIf nothing here has changed in fourteen years, then what does that say about the kid who stood here? Am I the only thing that's changed?",
  },
  {
    name: "Central Park - 2011/ 2014",
    coordinates: [40.7804, -73.9725],
    description:
      "You'll notice these photos are tagged Central Park, but they're really just right in front of the Natural History Museum. And that makes sense, because back then, in my mind, this was Central Park. We walked out into the snow-covered grounds, and followed what looked like a circular path that led us right back to where we started. The park was mostly empty, the snow untouched — so we took the opportunity to throw snowballs at each other, enjoying the quiet. Probably no one else was visiting given how heavy the snow had been the night before. Most of the park was unwalkable anyway.\n\nAfter we left, I remember thinking, \"Wow, so that's Central Park? It's not that fancy. Why is everyone always talking about it?\"\n\nNow, having moved to New York and visited Central Park again, I realized what actually happened: my family and I had just walked around that little square garden in front of the museum. The entire park — covered in snow — was right behind us the whole time. We just never saw it.\n\nIt's always a funny story to tell friends. The sheer shock and surprise I felt when I eventually visited Central Park again in the summer, when the trees were fully flushed and green, and realized that the green rectangle on the map of Manhattan was the entire park itself. My mind could barely wrap around it.\n\nThis might seem like a normal picture, but I always chuckle looking back at it now. The naiveness of child-me versus everything I've learned since then — it really shows how much I've changed.",
  },
];

// Helper function to fade audio volume
function fadeAudio(audioElement, targetVolume, duration) {
  const startVolume = audioElement.volume;
  const volumeChange = targetVolume - startVolume;
  const startTime = Date.now();

  function updateVolume() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    audioElement.volume = startVolume + volumeChange * progress;

    if (progress < 1) {
      requestAnimationFrame(updateVolume);
    }
  }

  updateVolume();
}

// Initialize the intro experience
function initIntro() {
  const cloudEmoji = document.getElementById("cloud-emoji");
  const introContent = document.getElementById("intro-content");
  const enterButton = document.getElementById("enter-site");
  const introOverlay = document.getElementById("intro-overlay");
  const mapContainer = document.getElementById("map-container");
  const backgroundAudio = document.getElementById("background-audio");

  // Handle cloud emoji click
  cloudEmoji.addEventListener("click", function () {
    // Add shrinking animation
    cloudEmoji.classList.add("shrink");

    // Show intro content after animation starts
    setTimeout(() => {
      introContent.style.display = "block";

      // Start the text animations
      setTimeout(() => {
        introContent.classList.add("show");
      }, 100);
    }, 1000);

    // Start background audio
    backgroundAudio.volume = 0.3; // Set initial volume
    backgroundAudio
      .play()
      .catch((e) => console.log("Background audio play failed:", e));
  });

  // Handle enter button click
  enterButton.addEventListener("click", function () {
    // Fade out the intro overlay
    introOverlay.classList.add("fade-out");

    // After fade out completes, show the map and initialize it
    setTimeout(function () {
      introOverlay.style.display = "none";
      mapContainer.style.display = "block";
      initMap();
    }, 1500);
  });
}

// Initialize the map
function initMap() {
  const map = L.map("map").setView(manhattanCenter, 13);

  // Store map reference globally for access from other functions
  window.currentMap = map;

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19,
    }
  ).addTo(map);

  // Create custom marker icon using heart SVG
  const customIcon = L.icon({
    iconUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c0392b">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    `)}`,
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });

  // Add markers for each location
  const markers = [];
  locations.forEach((location) => {
    const marker = L.marker(location.coordinates, { icon: customIcon }).addTo(
      map
    );

    // Add click event for memory overlay
    marker.on("click", function () {
      showMemoryOverlay(location);
    });

    // Disable popup since we're using memory overlay instead
    marker.options.interactive = false;
    marker.getElement().style.pointerEvents = "none";

    markers.push(marker);
  });

  // Store markers globally for access from other functions
  window.currentMarkers = markers;

  // Minimum zoom level for hearts to become clickable
  const MIN_CLICKABLE_ZOOM = 15;

  // Function to update marker visibility and interactivity based on zoom level
  function updateMarkerInteractivity() {
    const currentZoom = map.getZoom();
    const isClickable =
      currentZoom >= MIN_CLICKABLE_ZOOM || allLocationsVisited();

    markers.forEach((marker) => {
      marker.options.interactive = isClickable;
      const element = marker.getElement();
      if (element) {
        element.style.pointerEvents = isClickable ? "auto" : "none";
        element.style.opacity = isClickable ? "1" : "0";
        element.style.visibility = isClickable ? "visible" : "hidden";
      }
    });
  }

  // Listen for zoom changes
  map.on("zoomend", updateMarkerInteractivity);

  // Set initial state
  updateMarkerInteractivity();

  // Set map bounds to focus on Manhattan
  const manhattanBounds = L.latLngBounds(
    [40.7, -74.02], // Southwest corner
    [40.8, -73.94] // Northeast corner
  );

  // Set maximum bounds to restrict navigation
  map.setMaxBounds(manhattanBounds);

  // Fit map to Manhattan bounds first
  map.fitBounds(manhattanBounds);

  // Get the zoom level that fitBounds calculated and set it as minimum
  const initialZoom = map.getZoom();
  map.setMinZoom(initialZoom);

  // Add some additional map controls
  map.addControl(L.control.scale());

  // Initialize the flowing memory path
  initMemoryPath(map, MIN_CLICKABLE_ZOOM);
}

// Initialize the memory path connecting all locations
function initMemoryPath(map, minZoom) {
  const path = document.getElementById("memory-path");
  if (!path) return;

  // Sort locations from south to north, with Museum before Central Park
  const sortedLocations = [...locations].sort((a, b) => {
    const latDiff = a.coordinates[0] - b.coordinates[0];
    if (Math.abs(latDiff) < 0.01) {
      if (
        a.name === "American Museum of Natural History - 2011/ 2014" &&
        b.name === "Central Park - 2011/ 2014"
      )
        return -1;
      if (
        a.name === "Central Park - 2011/ 2014" &&
        b.name === "American Museum of Natural History - 2011/ 2014"
      )
        return 1;
    }
    return latDiff;
  });

  // Always update path coordinates
  function updatePath() {
    const points = sortedLocations.map((loc) => {
      const point = map.latLngToContainerPoint([
        loc.coordinates[0],
        loc.coordinates[1],
      ]);
      return { x: point.x, y: point.y };
    });

    let pathData = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      pathData += ` L ${points[i].x} ${points[i].y}`;
    }

    path.setAttribute("d", pathData);
  }

  // Check visibility only
  function checkVisibility() {
    const currentZoom = map.getZoom();
    const allVisited = allLocationsVisited();

    if (currentZoom >= minZoom || allVisited) {
      path.style.display = "block";
    } else {
      path.style.display = "none";
    }
  }

  // Update path on move events (smooth tracking)
  map.on("move", updatePath);

  // Check visibility on zoom events
  map.on("zoomend", checkVisibility);
  map.on("resize", checkVisibility);

  // Initial setup
  updatePath();
  checkVisibility();
}

// Memory overlay functions
function showMemoryOverlay(location) {
  // Track that this location has been visited
  visitedLocations.add(location.name);

  // Check if all locations are now visited and update visibility
  if (allLocationsVisited()) {
    // Trigger visibility update for both hearts and line
    const map = window.currentMap;
    if (map) {
      // Force update marker visibility
      const markers = window.currentMarkers;
      if (markers) {
        markers.forEach((marker) => {
          marker.options.interactive = true;
          const element = marker.getElement();
          if (element) {
            element.style.pointerEvents = "auto";
            element.style.opacity = "1";
            element.style.visibility = "visible";
          }
        });
      }

      // Force update line visibility
      const path = document.getElementById("memory-path");
      if (path) {
        path.style.display = "block";
        path.style.visibility = "visible";
      }
    }
  }

  const overlay = document.getElementById("memory-overlay");
  const image = document.getElementById("memory-image");
  const title = document.getElementById("memory-title");
  const description = document.getElementById("memory-description");
  const audio = document.getElementById("memory-audio");
  const backgroundAudio = document.getElementById("background-audio");
  const prevBtn = document.getElementById("prev-image");
  const nextBtn = document.getElementById("next-image");

  // Remove any existing event listeners to prevent duplicates
  prevBtn.replaceWith(prevBtn.cloneNode(true));
  nextBtn.replaceWith(nextBtn.cloneNode(true));

  // Get fresh references after cloning
  const freshPrevBtn = document.getElementById("prev-image");
  const freshNextBtn = document.getElementById("next-image");

  // Set the content based on location
  title.textContent = location.name;
  description.textContent = location.description;

  // Set image source based on location name
  const imagePath = getImagePath(location.name);

  // Check if this location has multiple images (carousel)
  if (Array.isArray(imagePath)) {
    // Set up carousel
    overlay.currentImageIndex = 0;
    overlay.imagePaths = imagePath;
    image.src = imagePath[0];

    // Show carousel buttons
    freshPrevBtn.style.display = "flex";
    freshNextBtn.style.display = "flex";

    // Add carousel event listeners
    freshPrevBtn.addEventListener("click", () => navigateCarousel(-1));
    freshNextBtn.addEventListener("click", () => navigateCarousel(1));
  } else {
    // Single image - hide carousel buttons
    image.src = imagePath;
    freshPrevBtn.style.display = "none";
    freshNextBtn.style.display = "none";
  }

  // Set audio source based on location name
  const audioPath = getAudioPath(location.name);
  if (audioPath) {
    audio.src = audioPath;
    audio.load();
  }

  // Fade out background audio
  fadeAudio(backgroundAudio, 0, 1000);

  // Show overlay with animation
  overlay.style.display = "flex";
  setTimeout(() => {
    overlay.classList.add("show");
  }, 10);

  // Play memory audio after background fades out
  setTimeout(() => {
    if (audioPath) {
      audio.play().catch((e) => console.log("Memory audio play failed:", e));
    }
  }, 1200);

  // Add click-out functionality
  overlay.addEventListener("click", handleOverlayClick);

  // Add close button functionality
  const closeBtn = document.getElementById("close-memory");
  closeBtn.addEventListener("click", hideMemoryOverlay);
}

function navigateCarousel(direction) {
  const overlay = document.getElementById("memory-overlay");
  const image = document.getElementById("memory-image");

  if (!overlay.imagePaths) return;

  overlay.currentImageIndex += direction;

  // Wrap around
  if (overlay.currentImageIndex < 0) {
    overlay.currentImageIndex = overlay.imagePaths.length - 1;
  } else if (overlay.currentImageIndex >= overlay.imagePaths.length) {
    overlay.currentImageIndex = 0;
  }

  // Update image with fade effect
  image.style.opacity = "0.7";
  setTimeout(() => {
    image.src = overlay.imagePaths[overlay.currentImageIndex];
    image.style.opacity = "1";
  }, 150);
}

function hideMemoryOverlay() {
  const overlay = document.getElementById("memory-overlay");
  const audio = document.getElementById("memory-audio");
  const backgroundAudio = document.getElementById("background-audio");

  // Stop memory audio
  audio.pause();
  audio.currentTime = 0;

  // Fade background audio back in
  fadeAudio(backgroundAudio, 0.3, 1000);

  // Hide overlay with animation
  overlay.classList.remove("show");
  setTimeout(() => {
    overlay.style.display = "none";
  }, 800);

  // Remove event listeners
  overlay.removeEventListener("click", handleOverlayClick);
}

function handleOverlayClick(event) {
  // Close overlay if clicking on backdrop (not on content)
  if (
    event.target.id === "memory-overlay" ||
    event.target.id === "memory-backdrop"
  ) {
    hideMemoryOverlay();
  }
}

function getImagePath(locationName) {
  const imageMap = {
    "9/11 Memorial Pool - 2014": "img/fountain.png",
    "Madison Square Park - 2011": "img/madison_square.png",
    "Empire State Building - 2011": "img/empire_state.png",
    "Grand Central Terminal - 2014": "img/grand_central.png",
    "Times Square - 2014": "img/times_square.png",
    "Rockefeller Center - 2014": [
      "img/rockefeller1.png",
      "img/rockefeller2.png",
    ],
    "Radio City Music Hall - 2011": "img/radio_city.png",
    "American Museum of Natural History - 2011/ 2014": [
      "img/outside_nhm.jpeg",
      "img/asianpeople.jpeg",
      "img/dino.jpeg",
    ],
    "Central Park - 2011/ 2014": [
      "img/centralpark.jpeg",
      "img/centralpark1.jpeg",
    ],
  };
  return imageMap[locationName] || "img/fountain.png";
}

function getAudioPath(locationName) {
  const audioMap = {
    "9/11 Memorial Pool - 2014": "audio/fountain.mp3",
    "Madison Square Park - 2011": "audio/madison_square.mp3",
    "Empire State Building - 2011": "audio/empire_state.mp3",
    "Grand Central Terminal - 2014": "audio/grand_central.mp3",
    "Times Square - 2014": "audio/times_square.mp3",
    "Rockefeller Center - 2014": "audio/rockefeller_rink.mp3",
    "Radio City Music Hall - 2011": "audio/radio_city.mp3",
    "American Museum of Natural History - 2011/ 2014": "audio/museum.mp3",
    "Central Park - 2011/ 2014": "audio/centralpark.mp3",
  };
  return audioMap[locationName];
}
