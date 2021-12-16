import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FormSubmissionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class FormSubmission {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phone?: string;
  readonly message: string;
  readonly is_marked_read?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FormSubmission, FormSubmissionMetaData>);
  static copyOf(source: FormSubmission, mutator: (draft: MutableModel<FormSubmission, FormSubmissionMetaData>) => MutableModel<FormSubmission, FormSubmissionMetaData> | void): FormSubmission;
}