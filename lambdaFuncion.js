exports.handler = async (event) => {
  const what_to_print = process.env.what_to_print
  const how_many_time = process.env.how_many_time
  // TODO implement
  for(let i = 0; i < how_many_time; i++) {
    console.log(what_to_print)
  }
  const response = {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};