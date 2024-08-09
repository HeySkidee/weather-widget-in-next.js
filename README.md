# [Dynamic Weather Widget](https://weather-widget-in-next-js.vercel.app/)

Follow these steps to integrate a dynamic weather widget into your Next.js project.

### Step 1: Create an API Route

1. Inside your `app` folder, create a new folder named `api`.
2. Inside the `api` folder, create a subfolder for your weather route (e.g., `weather`).
3. Add a file named `route.js` inside the `weather` folder.

   You can find the code for `route.js` [here](https://github.com/HeySkidee/weather-widget-in-next.js/blob/main/app/api/weather/route.js).

   Make sure to change the name of the city in the code as needed:
   
   ![City Name Change](https://github.com/user-attachments/assets/2d1a0716-b9c2-4dfe-9824-69ccf13430b3)

### Step 2: Add the Environment Variable

1. Go to the [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) website, create an account, and navigate to the **My API keys** section in your profile to generate an API key.

   <img src='https://github.com/user-attachments/assets/424a3b07-d985-409e-90f9-a31ff98f6b76' width=60%>

   It might take a few minutes for the API key to activate and start working.

2. Create a file named `.env` in your project folder and add the environment variable with your API key:
   
   ![Add Environment Variable](https://github.com/user-attachments/assets/9008135f-0c8a-461c-93da-cc9dfa212976)

   <details>
    <summary>If you are hosting the project on Vercel:</summary>

      - Add the environment variable during deployment, or if the project is already deployed, add it through the project dashboard
   
        <img src='https://github.com/user-attachments/assets/e92a2c17-ec36-439e-9dd4-94ec01e66eef' width=60%>
  </details>


### Step 3: Create a Weather Component

1. Create a folder named `components` in your project folder.
2. Inside the `components` folder, create a file named `Weather.js`.
3. Add the code from [here](https://github.com/HeySkidee/weather-widget-in-next.js/blob/main/components/Weather.js) to `Weather.js`.
4. Install the dependencies by running the following command in project folder terminal:
      
   ```jsx
   npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons swr framer-motion
   ```

### Step 4: Import and Use the Weather Component

1. Import the `Weather` component in the file where you want to display the widget.
   
   ```javascript
   import Weather from './components/Weather';
   ```

2. Add the `Weather` component in your JSX:

   ```jsx
   <Weather />
   ```

   ![Import Weather Component](https://github.com/user-attachments/assets/5caa7ab6-194c-4b83-86b6-c2143e5f3f10)

The weather widget should now be integrated and look similar to this:

<img src='https://github.com/user-attachments/assets/a182da38-49c6-453c-b179-1799116da369' width='40%'>

It's just straight text, no css around it.
