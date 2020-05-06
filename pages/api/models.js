function getModels(req, res) {
	return db.model
		.findAll()
		.then((models) => {
			res.status(200).json(JSON.stringify(models));
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
}

export default (req, res) => {
	if (req.method === "GET") {
		return getModels(req, res);
	} else {
		return res.status(405).end();
	}
};
