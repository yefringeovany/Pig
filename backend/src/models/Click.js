// Modelo de Mongoose para guardar los clics (ES Modules)
import mongoose from 'mongoose';

const clickSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  count: { type: Number, default: 0 }
});

const Click = mongoose.model('Click', clickSchema);
export default Click;
