import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { DataStoreModel } from "../../models/data-store"
import { NavigationStoreModel } from "../../navigation/navigation-store"

/**
 * An RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  dataStore: types.optional(DataStoreModel, {}),
  navigationStore: types.optional(NavigationStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export type RootStore = Instance<typeof RootStoreModel>

/**
 * The data of an RootStore.
 */
export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>
