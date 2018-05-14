import {Mock, MockBehavior} from 'moq.ts';

export function createLooseMock<T>(): Mock<T> {
    const mock = new Mock<T>();
    mock.setBehaviorStrategy(MockBehavior.Loose);
    return mock;
}
