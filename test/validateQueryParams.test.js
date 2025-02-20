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

test('No location param, but latitude sent', () => {
    const mockedReq = {
        query: {
            latitude: "59.334591"
        }
    }

    const mockedRes = {
        sendStatus: jest.fn().mockReturnValue(this)
    }

    validateQueryParams(mockedReq, mockedRes)

    expect(mockedRes.sendStatus).not.toHaveBeenCalled()
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