// Controlador para manejar los clics (ES Modules)
import Click from '../models/Click.js';

export const defaultGetClicks = async (req, res) => {
  try {
    let click = await Click.findOne();
    if (!click) {
      click = await Click.create({ count: 0 });
    }
    res.json({ count: click.count, timestamp: click.timestamp });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los clics' });
  }
};

export const defaultIncrementClick = async (req, res) => {
  try {
    let click = await Click.findOne();
    if (!click) {
      click = await Click.create({ count: 1 });
    } else {
      click.count += 1;
      click.timestamp = new Date();
      await click.save();
    }
    res.json({ count: click.count, timestamp: click.timestamp });
  } catch (err) {
    res.status(500).json({ error: 'Error al incrementar el clic' });
  }
};
