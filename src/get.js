import handler from "./util/handler";
import dynamoDb from "./util/dynamodb";

export const main = handler(async (event) => {

    const params = {
        TableName: process.env.TABLE_NAME,

        Key: {
            userId: "123",
            noteId: event.pathParameters.id,
        },
    };

    const result = await dynamoDb.get(params);

    if(!result.Item) {
        throw new Error("Itemo not found");
    }

    return result.Item;
})