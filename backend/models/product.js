import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Бүтээгдэхүүний нэрийг оруулна уу."],
  },
  description: {
    type: String,
    required: [true, "Бүтээгдэхүүний мэдээллийг оруулна уу."],
  },
  price: {
    type: Number,
    required: [true, "Бүтээгдэхүүний үнийг оруулна уу."],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],

  category: {
    type: String,
    required: [true, "Бүтээгдэхүүний төрлийг оруулна уу."],
    enum: {
      values: ["Цамц", "Өмд", "Гутал", "Подволж", "Куртка"],
      message: "Бүтээгдэхүүний төрлийг зөв сонгоорой.",
    },
  },
  seller: {
    type: String,
    required: [true, "Бүтээгдэхүүнийг борлуулагчийг оруулна уу."],
  },
  stock: {
    type: Number,
    required: [true, "Бүтээгдэхүүний stock оруулна уу."],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
