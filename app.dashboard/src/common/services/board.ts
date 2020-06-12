import gql from 'graphql-tag';

import { Service } from '../lib/service';

/** https://www.apollographql.com/docs/react/api/apollo-client/#ApolloClient.query */
export class BoardService extends Service {
    async shutdown(restart: boolean) {
        return Service.getApollo().mutate({
            mutation: gql`
                mutation ShutdownBoard($restart: Boolean) {
                    shutdownBoard(restart: $restart) {
                        errors {
                            code
                        }
                    }
                }
            `,
            variables: {
                restart,
            },
        });
    }

    async getStatus() {
        const result = await Service.getApollo().query({
            query: gql`
                query {
                    getBoardStatus {
                        data {
                            memoryFree
                            memoryAvailable
                            cpuUsage
                            cpuTemperature
                        }
                        errors {
                            code
                        }
                    }
                }
            `,
            fetchPolicy: 'no-cache',
        });

        return result.data.getBoardStatus;
    }

    async getInfo() {
        const result = await Service.getApollo().query({
            query: gql`
                query {
                    getBoardInfo {
                        data {
                            serialNumber
                            ip
                        }
                        errors {
                            code
                        }
                    }
                }
            `,
        });

        return result.data.getBoardInfo;
    }

    async updateLEDArray() {
        return Service.getApollo().mutate({
            mutation: gql`
                mutation ShutdownBoard($restart: Boolean) {
                    shutdownBoard(restart: $restart) {
                        errors {
                            code
                        }
                    }
                }
            `,
        });
    }
}
