# Weather-app

## Class형 컴포넌트로 날씨앱을 만들어봄.

---

## 날씨API를 가져옴.

- longitude와 latitude는 위도와 경도이다.

```
await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
```

## 날씨는 Clear, Clouds, Drizzle 등 8종류가 있다.

<img src="./images/Clear.jpg" width="150px"></img>
<img src="./images/Clouds.jpg" width="150px"></img>
<img src="./images/Drizzle.jpg" width="150px"></img>
<img src="./images/Dust.jpg" width="150px"></img>
<img src="./images/Haze.jpg" width="150px"></img>
<img src="./images/Rain.jpg" width="150px"></img>
<img src="./images/Snow.jpg" width="150px"></img>
<img src="./images/Thunderstorm.jpg" width="150px"></img>
