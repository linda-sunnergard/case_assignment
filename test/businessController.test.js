require('jest-fetch-mock').enableMocks();
import { getBusinesses, getBusinessByID } from "../src/controllers/businessController";

test('Get Businesses: The URL sent to Yelp Fusion API gets populated with the params', async () => {
    const mockedReq = {
            query: {
                location: "NYC",
                limit: "1"
            }
        }

        const expectedResult = "https://api.yelp.com/v3/businesses/search?location=NYC&limit=1";

        const mockedRes = {
            send: jest.fn()
        }

        fetch.mockResolvedValue({
            json: jest.fn(() => expectedResult)
        });

    await getBusinesses(mockedReq, mockedRes);

    expect(fetch.mock.calls[0][0]).toEqual(expectedResult)
})

test('Get Businesses By ID: The URL sent to Yelp Fusion API gets populated with the ID params', async () => {
    const mockedReq = {
        params: {
            id: "V7lXZKBDzScDeGB8JmnzSA"
        }
    };

    const expectedResult = "https://api.yelp.com/v3/businesses/V7lXZKBDzScDeGB8JmnzSA";

    const mockedRes = {
        send: jest.fn()
    };

    fetch.mockResolvedValue({
        json: jest.fn(() => expectedResult)
    });

    await getBusinessByID(mockedReq, mockedRes);

    expect(fetch.mock.calls[0][0]).toEqual(expectedResult)
})