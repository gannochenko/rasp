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
        return Service.getApollo().query({
            query: gql`
                query {
                    getStatus {
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
    }

    async getInfo() {
        return Service.getApollo().query({
            query: gql`
                query {
                    getInfo {
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
    }
}
