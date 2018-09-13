import {TextBuffer} from 'atom';

import {Unchanged, Addition, Deletion, NoNewline} from '../../../lib/models/patch/region';
import {assertInFilePatch} from '../../helpers';
    const buffer = new TextBuffer({text: '0000\n0001\n0002\n'});
    const layers = buildLayers(buffer);
        marker: markRange(layers.hunk, 0, 2),
        regions: [
          new Unchanged(markRange(layers.unchanged, 0)),
          new Addition(markRange(layers.addition, 1, 2)),
    const patch = new Patch({status: 'modified', hunks, buffer, layers});
    assert.strictEqual(filePatch.getBuffer().getText(), '0000\n0001\n0002\n');
    const nBuffer = new TextBuffer({text: '0001\n0002\n'});
    const nLayers = buildLayers(nBuffer);
        marker: markRange(nLayers.hunk, 0, 1),
        regions: [
          new Unchanged(markRange(nLayers.unchanged, 0)),
          new Addition(markRange(nLayers.addition, 1)),
    const nPatch = new Patch({status: 'modified', hunks: nHunks, buffer: nBuffer, layers: nLayers});
    const buffer = new TextBuffer();
    const layers = buildLayers(buffer);
    const patch = new Patch({status: 'modified', hunks: [], buffer, layers});
    const buffer = new TextBuffer({text: '0000\n0001\n0002\n0003\n0004\n0005\n0006\n0007\n0008\n0009\n'});
    const layers = buildLayers(buffer);
        marker: markRange(layers.hunk, 0, 9),
        regions: [
          new Unchanged(markRange(layers.unchanged, 0)),
          new Addition(markRange(layers.addition, 1)),
          new Unchanged(markRange(layers.unchanged, 2)),
          new Addition(markRange(layers.addition, 3)),
          new Deletion(markRange(layers.deletion, 4)),
          new Addition(markRange(layers.addition, 5, 6)),
          new Deletion(markRange(layers.deletion, 7)),
          new Addition(markRange(layers.addition, 8)),
          new Unchanged(markRange(layers.unchanged, 9)),
    const patch = new Patch({status: 'modified', hunks, buffer, layers});
    const buffer = new TextBuffer();
    const layers = buildLayers(buffer);
    const patch = new Patch({status: 'modified', hunks: [], buffer, layers});
    const buffer = new TextBuffer({text: '0000\n No newline at end of file\n'});
    const layers = buildLayers(buffer);
        marker: markRange(layers.hunk, 0, 1),
        regions: [
          new Addition(markRange(layers.addition, 0)),
          new NoNewline(markRange(layers.noNewline, 1)),
    const patch = new Patch({status: 'modified', hunks, buffer, layers});
      [[1, 0], [1, 26]],
      const buffer = new TextBuffer();
      const layers = buildLayers(buffer);
      emptyPatch = new Patch({status: 'modified', hunks: [], buffer, layers});
    const buffer0 = new TextBuffer({text: '0'});
    const layers0 = buildLayers(buffer0);
    const patch0 = new Patch({status: 'modified', hunks: [], buffer: buffer0, layers: layers0});
    const buffer1 = new TextBuffer({text: '1'});
    const layers1 = buildLayers(buffer1);
    const patch1 = new Patch({status: 'modified', hunks: [], buffer: buffer1, layers: layers1});
      const buffer = new TextBuffer({text: '0000\n0001\n0002\n0003\n0004\n'});
      const layers = buildLayers(buffer);
          marker: markRange(layers.hunk, 0, 4),
          regions: [
            new Unchanged(markRange(layers.unchanged, 0)),
            new Addition(markRange(layers.addition, 1, 2)),
            new Deletion(markRange(layers.deletion, 3)),
            new Unchanged(markRange(layers.unchanged, 4)),
      const patch = new Patch({status: 'modified', hunks, buffer, layers});
      assert.strictEqual(stagedPatch.getBuffer().getText(), '0000\n0001\n0003\n0004\n');
          regions: [
            {kind: 'unchanged', string: ' 0000', range: [[0, 0], [0, 4]]},
            {kind: 'addition', string: '+0001', range: [[1, 0], [1, 4]]},
            {kind: 'deletion', string: '-0003', range: [[2, 0], [2, 4]]},
            {kind: 'unchanged', string: ' 0004', range: [[3, 0], [3, 4]]},
        const buffer = new TextBuffer({text: '0000\n0001\n0002\n'});
        const layers = buildLayers(buffer);
            marker: markRange(layers.hunk, 0, 2),
            regions: [
              new Deletion(markRange(layers.deletion, 0, 2)),
        const patch = new Patch({status: 'deleted', hunks, buffer, layers});
        assert.strictEqual(stagedPatch.getBuffer().getText(), '0000\n0001\n0002\n');
            regions: [
              {kind: 'unchanged', string: ' 0000', range: [[0, 0], [0, 4]]},
              {kind: 'deletion', string: '-0001\n-0002', range: [[1, 0], [2, 4]]},
        assert.strictEqual(stagedPatch.getBuffer().getText(), '0000\n0001\n0002\n');
            regions: [
              {kind: 'deletion', string: '-0000\n-0001\n-0002', range: [[0, 0], [2, 4]]},
        const buffer = new TextBuffer({text: '0000\n0001\n0002\n'});
        const layers = buildLayers(buffer);
            marker: markRange(layers.hunk, 0, 2),
            regions: [
              new Deletion(markRange(layers.deletion, 0, 2)),
        const patch = new Patch({status: 'deleted', hunks, buffer, layers});
    const buffer = new TextBuffer({text: '0000\n0001\n0002\n0003\n0004\n0005\n'});
    const layers = buildLayers(buffer);
        marker: markRange(layers.hunk, 0, 2),
        regions: [
          new Unchanged(markRange(layers.unchanged, 0)),
          new Addition(markRange(layers.addition, 1)),
          new Unchanged(markRange(layers.unchanged, 2)),
        oldStartRow: 20, oldRowCount: 3, newStartRow: 19, newRowCount: 2,
        marker: markRange(layers.hunk, 3, 5),
        regions: [
          new Unchanged(markRange(layers.unchanged, 3)),
          new Deletion(markRange(layers.deletion, 4)),
          new Unchanged(markRange(layers.unchanged, 5)),
    const patch = new Patch({status: 'modified', hunks, buffer, layers});
    assert.strictEqual(stagedPatch.getBuffer().getText(), '0003\n0004\n0005\n');
        regions: [
          {kind: 'unchanged', string: ' 0003', range: [[0, 0], [0, 4]]},
          {kind: 'deletion', string: '-0004', range: [[1, 0], [1, 4]]},
          {kind: 'unchanged', string: ' 0005', range: [[2, 0], [2, 4]]},
      const buffer = new TextBuffer({text: '0000\n0001\n0002\n0003\n0004\n'});
      const layers = buildLayers(buffer);
          marker: markRange(layers.hunk, 0, 4),
          regions: [
            new Unchanged(markRange(layers.unchanged, 0)),
            new Addition(markRange(layers.addition, 1, 2)),
            new Deletion(markRange(layers.deletion, 3)),
            new Unchanged(markRange(layers.unchanged, 4)),
      const patch = new Patch({status: 'modified', hunks, buffer, layers});
      assert.strictEqual(unstagedPatch.getBuffer().getText(), '0000\n0001\n0002\n0003\n0004\n');
          regions: [
            {kind: 'unchanged', string: ' 0000', range: [[0, 0], [0, 4]]},
            {kind: 'deletion', string: '-0001', range: [[1, 0], [1, 4]]},
            {kind: 'unchanged', string: ' 0002', range: [[2, 0], [2, 4]]},
            {kind: 'addition', string: '+0003', range: [[3, 0], [3, 4]]},
            {kind: 'unchanged', string: ' 0004', range: [[4, 0], [4, 4]]},
        const buffer = new TextBuffer({text: '0000\n0001\n0002\n'});
        const layers = buildLayers(buffer);
            marker: markRange(layers.hunk, 0, 2),
            regions: [
              new Addition(markRange(layers.addition, 0, 2)),
        addedPatch = new Patch({status: 'added', hunks, buffer, layers});
            regions: [
              {kind: 'unchanged', string: ' 0000\n 0001', range: [[0, 0], [1, 4]]},
              {kind: 'deletion', string: '-0002', range: [[2, 0], [2, 4]]},
            regions: [
              {kind: 'deletion', string: '-0000\n-0001\n-0002', range: [[0, 0], [2, 4]]},
            regions: [
              {kind: 'deletion', string: '-0000\n-0001\n-0002', range: [[0, 0], [2, 4]]},
    const buffer = new TextBuffer({text: '0000\n0001\n0002\n0003\n0004\n0005\n'});
    const layers = buildLayers(buffer);
        marker: markRange(layers.hunk, 0, 2),
        regions: [
          new Unchanged(markRange(layers.unchanged, 0)),
          new Addition(markRange(layers.addition, 1)),
          new Unchanged(markRange(layers.unchanged, 2)),
        marker: markRange(layers.hunk, 3, 5),
        regions: [
          new Unchanged(markRange(layers.unchanged, 3)),
          new Deletion(markRange(layers.deletion, 4)),
          new Unchanged(markRange(layers.unchanged, 5)),
    const patch = new Patch({status: 'modified', hunks, buffer, layers});
    assert.strictEqual(unstagedPatch.getBuffer().getText(), '0000\n0001\n0002\n');
        regions: [
          {kind: 'unchanged', string: ' 0000', range: [[0, 0], [0, 4]]},
          {kind: 'deletion', string: '-0001', range: [[1, 0], [1, 4]]},
          {kind: 'unchanged', string: ' 0002', range: [[2, 0], [2, 4]]},
      const buffer = new TextBuffer({text: '0000\n0001\n0002\n0003\n0004\n0005\n0006\n0007\n'});
      const layers = buildLayers(buffer);
          marker: markRange(layers.hunk, 0, 4),
          regions: [
            new Unchanged(markRange(layers.unchanged, 0)),
            new Addition(markRange(layers.addition, 1)),
            new Deletion(markRange(layers.deletion, 2, 3)),
            new Unchanged(markRange(layers.unchanged, 4)),
          marker: markRange(layers.hunk, 5, 7),
          regions: [
            new Unchanged(markRange(layers.unchanged, 5)),
            new Addition(markRange(layers.addition, 6)),
            new Unchanged(markRange(layers.unchanged, 7)),
      const patch = new Patch({status: 'modified', hunks, buffer, layers});
      const buffer = new TextBuffer({text: '0000\n0001\n No newline at end of file\n'});
      const layers = buildLayers(buffer);
          marker: markRange(layers.hunk, 0, 2),
          regions: [
            new Unchanged(markRange(layers.unchanged, 0)),
            new Addition(markRange(layers.addition, 1)),
            new NoNewline(markRange(layers.noNewline, 2)),
      const patch = new Patch({status: 'modified', hunks, buffer, layers});
        const buffer = new TextBuffer({text: '0000\n0001\n'});
        const layers = buildLayers(buffer);
            marker: markRange(layers.hunk, 0, 1),
            regions: [
              new Addition(markRange(layers.addition, 0, 1)),
        const patch = new Patch({status: 'added', hunks, buffer, layers});
        const buffer = new TextBuffer({text: '0000\n0001\n'});
        const layers = buildLayers(buffer);
            markers: markRange(layers.hunk, 0, 1),
            regions: [
              new Deletion(markRange(layers.deletion, 0, 1)),
        const patch = new Patch({status: 'deleted', hunks, buffer, layers});
    const buffer = new TextBuffer({text: '0\n1\n2\n3\n'});
    const marker = markRange(buffer, 0, 1);
    assert.strictEqual(nullFilePatch.getBuffer().getText(), '');
    assert.isFalse(nullFilePatch.getStagePatchForHunk(new Hunk({regions: [], marker})).isPresent());
    assert.isFalse(nullFilePatch.getUnstagePatchForHunk(new Hunk({regions: [], marker})).isPresent());

function buildLayers(buffer) {
  return {
    hunk: buffer.addMarkerLayer(),
    unchanged: buffer.addMarkerLayer(),
    addition: buffer.addMarkerLayer(),
    deletion: buffer.addMarkerLayer(),
    noNewline: buffer.addMarkerLayer(),
  };
}

function markRange(buffer, start, end = start) {
  return buffer.markRange([[start, 0], [end, Infinity]]);
}