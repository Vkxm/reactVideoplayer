# 🎬 Custom Video Player with React

This project is a **Custom Video Player** built using **React**. It demonstrates how to create a fully functional video player with custom controls like Play/Pause, Volume Control, Progress Bar (Seek), Mute/Unmute, and Fullscreen Toggle. The default browser controls are disabled, and everything is managed via custom React components.

## 🚀 Features

- **Play/Pause**: Custom button to play or pause the video.
- **Seek/Progress Bar**: Custom slider to seek through the video and track current progress.
- **Volume Control**: Custom slider to control the video volume.
- **Mute/Unmute**: Custom button to toggle the mute state.
- **Fullscreen**: Custom button to toggle fullscreen mode.

## 🛠️ Built With

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev/) - Fast and optimized development environment for modern JavaScript projects.

## 📁 Project Structure

```bash
custom-video-player/
├── public/
│   └── index.html       # Main HTML file
├── src/
│   ├── assets/
│   │   └── sampleVideo.mp4  # Video file in the assets folder
│   ├── components/
│   │   └── CustomVideoPlayer.jsx  # Custom video player component
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point for the app
├── .gitignore
├── package.json
└── README.md             # This readme file
```

## 📝 Getting Started

### Prerequisites

To run this project locally, you'll need to have the following tools installed on your machine:

- **Node.js** (v14 or later)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/custom-video-player.git
   ```

2. **Navigate into the project directory**:

   ```bash
   cd custom-video-player
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

   or, if you're using yarn:

   ```bash
   yarn install
   ```

### Running the Project

To run the project in development mode:

```bash
npm run dev
```

This will start the development server, and you can view the video player by navigating to `http://localhost:3000` in your browser.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist/` folder containing the static files for deployment.

## 📦 Usage

1. **Adding Your Own Video**:

   Place your video file in the `src/assets/` folder.

2. **Import and Use the `CustomVideoPlayer` component**:

   In `App.jsx`, import your video file and pass it as a prop to the `CustomVideoPlayer` component.

   Example:

   ```jsx
   import React from 'react';
   import CustomVideoPlayer from './components/CustomVideoPlayer';
   import myVideo from './assets/myVideo.mp4';

   const App = () => {
     return (
       <div>
         <h1>My Custom Video Player</h1>
         <CustomVideoPlayer videoSrc={myVideo} />
       </div>
     );
   };

   export default App;
   ```

3. **Custom Controls**:

   - **Play/Pause**: Click the button to toggle between playing and pausing the video.
   - **Seek/Progress**: Use the slider to seek through the video or view the progress.
   - **Volume**: Adjust the volume using the custom slider.
   - **Mute/Unmute**: Mute or unmute the video using the button.
   - **Fullscreen**: Click the button to toggle fullscreen mode for the video.

## 🖼️ Screenshots



## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, feel free to submit a pull request or open an issue.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



