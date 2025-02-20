import { validateQueryParams } from "../src/controllers/validateQueryParams";

test('Location param being sent in as expected', () => {
    const mockedReq = {
        query: {
            location: "NYC"
        }
    }

    const mockedRes = {
        sendStatus: jest.fn().mockReturnValue(this)
    }

    validateQueryParams(mockedReq, mockedRes)

    expect(mockedRes.sendStatus).not.toHaveBeenCalled()
})

test('No location param, but latitude and longitude is sent', () => {
    const mockedReq = {
        query: {
            latitude: "22.123456",
            longitude: "11.123456"
        }
    }

    const mockedRes = {
        sendStatus: jest.fn().mockReturnValue(this)
    }

    validateQueryParams(mockedReq, mockedRes)

    expect(mockedRes.sendStatus).not.toHaveBeenCalled()
})

test('No location or latitude, only longitude', () => {
    const mockedReq = {
        query: {
            
            longitude: "11.123456"
        }
    }

    const mockedRes = {
        sendStatus: jest.fn().mockReturnValue(400),
    }

    validateQueryParams(mockedReq, mockedRes)

    expect(mockedRes.sendStatus).toHaveBeenCalled()
})

test('No location, latitude or longitude is present', () => {
    const mockedReq = {
        query: {}
    }

    const mockedRes = {
        sendStatus: jest.fn().mockReturnValue(400),
    }

    validateQueryParams(mockedReq, mockedRes)

    expect(mockedRes.sendStatus).toHaveBeenCalled()
})