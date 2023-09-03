const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());

const { vehiculoRoute } = require("./routes/vehiculo.routes");
const authRoutes = require('./routes/auth.routes')

//rutas:
app.use("/vehiculo", vehiculoRoute);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
